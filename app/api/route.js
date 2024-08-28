import * as fs from 'fs/promises'; // Use the 'promises' API for async/await
import path from 'path';

// Named export for GET request
export async function GET(req) {
    try {
        const filePath = path.join(process.cwd(), 'blogsdata', 'blog1.json');
        const data = await fs.readFile(filePath, 'utf-8');     
        const newdata = JSON.parse(data)
        return new Response(JSON.stringify(newdata));
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
