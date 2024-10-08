import { client } from '$lib/sanityClient';
import { getCorsoBySlug } from '$lib/sanityQueries';
import { json, error } from '@sveltejs/kit';
export const prerender = true;
export async function GET({ params }) {
    const { slug } = params;

    const data = await client.fetch(
        `{
		"results":${getCorsoBySlug(slug)},
  	}`
    );

    if (!data) {
        throw error(404, 'Corso not found');
    }

    return json(data.results);

}
