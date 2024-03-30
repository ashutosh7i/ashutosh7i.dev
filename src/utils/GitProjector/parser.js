// main function to get user data

export default async function Parser(username, token = null) {
    try {
        // Define the endpoint for the GitHub GraphQL API
        const endpoint = 'https://api.github.com/graphql';

        // Define the configuration for the fetch request
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        };

        // If a token is provided, add it to the Authorization header
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        // Initialize an array to store all projects
        let allProjects = [];
        // Initialize a variable to store the end cursor for pagination
        let endCursor = null;
        // Initialize a variable to store whether there are more pages to fetch
        let hasNextPage = false;

        // Use a do-while loop to fetch all pages of data
        do {
            // Define the GraphQL query
            const query = `
            {
                user(login: "${username}") {
                    repositories(first: 100, after: ${endCursor ? `"${endCursor}"` : null}) {
                        nodes {
                            name
                            object(expression: "main:proj.md") {
                                ... on Blob {
                                    text
                                }
                            }
                        }
                        pageInfo {
                            endCursor
                            hasNextPage
                        }
                    }
                }
            }`;

            // Add the query to the request body
            config.body = JSON.stringify({ query });

            // Make the fetch request
            const response = await fetch(endpoint, config);
            // Parse the response data as JSON
            const responseData = await response.json();

            // Map over the repositories, parse the proj.md(s), and add them to the projects array
            const projects = responseData.data.user.repositories.nodes
                .filter(repo => repo.object) 
                .map(repo => {
                    const proj = parseProjects(repo.object.text);
                    return { name: repo.name, readme: proj };
                });

            // Add the new projects to the allProjects array
            allProjects = [...allProjects, ...projects];

            // Update the end cursor and hasNextPage variables for the next iteration
            endCursor = responseData.data.user.repositories.pageInfo.endCursor;
            hasNextPage = responseData.data.user.repositories.pageInfo.hasNextPage;
        } while (hasNextPage);

        // Return the array of all projects
        return allProjects;
    } catch (error) {
        // Log any errors that occur during the fetch request
        console.error('Error fetching user repositories:', error.message);
        // Return an empty array in case of error
        return [];
    }
}

// function to parse the README data
function parseProjects(readme) {
    // Initialize an object to store the parsed data
    const data = {};

    // Extract title
    const titleRegex = /##\s+(.*)/;
    const titleMatch = readme.match(titleRegex);
    if (titleMatch) {
        data.title = titleMatch[1].trim();
    }

    // Extract description
    const descriptionRegex = /> (.*)/;
    const descriptionMatch = readme.match(descriptionRegex);
    if (descriptionMatch) {
        data.description = descriptionMatch[1].trim();
    }

    // Extract features
    const featuresRegex = /\[comment\]: <> \(features_start\)([\s\S]*?)\[comment\]: <> \(features_end\)/;
    const featuresMatch = readme.match(featuresRegex);
    if (featuresMatch) {
        const features = featuresMatch[1].trim().split('\n').map(feature => feature.trim());
        data.features = features;
    }

    // Extract tech stack
    const techRegex = /\[comment\]: <> \(tech_start\)([\s\S]*?)\[comment\]: <> \(tech_end\)/;
    const techMatch = readme.match(techRegex);
    if (techMatch) {
        const techStack = techMatch[1].trim().split('\n').map(tech => {
            const [name, link] = tech.trim().slice(2, -1).split('](');
            return { name, link };
        });
        data.techStack = techStack;
    }

    // Extract images
    const imagesRegex = /\[comment\]: <> \(images_start\)([\s\S]*?)\[comment\]: <> \(images_end\)/;
    const imagesMatch = readme.match(imagesRegex);
    if (imagesMatch) {
        const images = imagesMatch[1].trim().split('\n').map(image => {
            const [name, link] = image.trim().slice(2, -1).split('](');
            if (name.toLowerCase().includes('logo')) {
                data.logo = { name, link };
            } else if (name.toLowerCase().includes('image')) {
                data.heroimage = { name, link };
            } else {
                data[name] = { name, link };
            }
            return { name, link };
        });
        data.images = images;
    }

    // Extract links
    const linksRegex = /\[comment\]: <> \(links_start\)([\s\S]*?)\[comment\]: <> \(links_end\)/;
    const linksMatch = readme.match(linksRegex);
    if (linksMatch) {
        const links = linksMatch[1].trim().split('\n').map(link => {
            const [title, url] = link.trim().slice(1, -1).split('](');
            return { title, url };
        });
        data.links = links;
    }

    // Extract badges
    const badgesRegex = /\[comment\]: <> \(badge_start\)([\s\S]*?)\[comment\]: <> \(badge_end\)/;
    const badgesMatch = readme.match(badgesRegex);
    if (badgesMatch) {
        const badges = badgesMatch[1].trim().split('\n').map(badge => {
            const [name, color] = badge.trim().slice(2, -1).split('](');
            return { name, color };
        });
        data.badges = badges;
    }

    // Extract date
    const dateRegex = /\[comment\]: <> \(date_start\)([\s\S]*?)\[comment\]: <> \(date_end\)/;
    const dateMatch = readme.match(dateRegex);
    if (dateMatch) {
        data.date = dateMatch[1].trim();
    }

    // Return the parsed data
    return data;
}
