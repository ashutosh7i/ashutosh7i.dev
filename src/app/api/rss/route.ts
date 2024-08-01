// pages/api/rss.js

import { NextRequest, NextResponse } from "next/server";
import fetch from "node-fetch";
import { XMLParser } from "fast-xml-parser";

export async function GET(req:NextRequest, res:NextResponse) {
  try {
    const response = await fetch("https://blog.ashutosh7i.dev/rss.xml");
    const rssText = await response.text();

    const parser = new XMLParser();
    const xmlDoc = parser.parse(rssText);
    const items = xmlDoc.rss.channel.item;

    const blogData = items.map((item: { [x: string]: any; title: any; link: any; }) => {
      return {
        title: item.title || null,
        link: item.link || null,
        coverImage: item["hashnode:coverImage"] || null,
      };
    });

    return NextResponse.json(blogData);
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    return NextResponse.json(
      { error: "Error fetching RSS feed" },
      { status: 500 }
    );
  }
}
