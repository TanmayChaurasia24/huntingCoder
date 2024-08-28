// http://localhost:3000/api/getblog?slug=Deploying%20Next.js%20Applications%20on%20Vercel
import * as fs from 'fs/promises'; 
import path from 'path';

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const slug = searchParams.get('slug');

        if (!slug) {
            return new Response(JSON.stringify({ error: 'Slug parameter is missing' }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        const filePath = path.join(process.cwd(), 'blogsdata', `${slug}.json`);

        const data = await fs.readFile(filePath, 'utf-8');

        const jsonData = JSON.parse(data);

        return new Response(JSON.stringify(jsonData), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: 'Failed to read file' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
