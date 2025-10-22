import { defineLive } from "next-sanity/live";
import { sanityClient } from "./sanity.client";

export const { sanityFetch, SanityLive } = defineLive({
  client: sanityClient,
  serverToken: process.env.SANITY_SERVER_TOKEN || false,
  browserToken: process.env.NEXT_PUBLIC_SANITY_BROWSER_TOKEN || false,
});