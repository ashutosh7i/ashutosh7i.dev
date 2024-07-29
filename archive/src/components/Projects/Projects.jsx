// import React from 'react'

// export default function Projects() {
//   return (
// <>
// <Center px={4}>
//             <Wrap spacing={2}>
//               <WrapItem>
//                 <Button
//                   colorScheme={selected === 'All' ? `${color}` : 'gray'}
//                   onClick={() => handleSelected('All')}
//                 >
//                   All
//                 </Button>
//               </WrapItem>
//               {options.map(option => (
//                 <WrapItem key={option.value}>
//                   <Button
//                     colorScheme={
//                       selected === option.value ? `${color}` : 'gray'
//                     }
//                     onClick={() => handleSelected(option.value)}
//                   >
//                     {option.value}
//                   </Button>
//                 </WrapItem>
//               ))}
//             </Wrap>
//           </Center>

//           {/* Other Projects */}
//           <SimpleGrid columns={[1, 2, 3]} px={4} spacing={4}>
//             {others
//               .filter(other => {
//                 if (selected === 'All') {
//                   return true;
//                 } else {
//                   return other.tags.includes(selected);
//                 }
//               })
//               .slice(0, displayCount) // Render only the first 'displayCount' cards
//               .map(other => (
//                 <Fade bottom key={other.name}>
//                   <Card>
//                     <Stack>
//                       <CardBody align="left" h={[null, '40vh']}>
//                         <Heading size="sm">{other.name}</Heading>

//                         <Text fontSize="sm" py={2}>
//                           {other.description}
//                         </Text>

//                         <HStack spacing={2}>
//                           {other.buttons.map(button => (
//                             <Link
//                               key={button.text}
//                               href={button.href}
//                               color={`${color}.400`}
//                             >
//                               {button.text}
//                             </Link>
//                           ))}
//                         </HStack>
//                         <HStack flexWrap="wrap" pt={4} spacing={2}>
//                           {other.badges.map(badge => (
//                             <Badge
//                               my={2}
//                               key={badge.text}
//                               colorScheme={badge.colorScheme}
//                             >
//                               {badge.text}
//                             </Badge>
//                           ))}
//                         </HStack>
//                       </CardBody>
//                     </Stack>
//                   </Card>
//                 </Fade>
//               ))}
//           </SimpleGrid>

//           {/* "Show More" button */}
//           {displayCount < others.length && selected !== '🔌IOT💡' && (
//             <Center mt={4}>
//               <Button
//                 colorScheme={`${color}`}
//                 onClick={() => setDisplayCount(displayCount + 3)}
//               >
//                 Show More
//               </Button>
//             </Center>
//           )}
//           </>
//   )
// }

import React from 'react'

export default function Projects() {
  return (
    <div>Projects</div>
  )
}
