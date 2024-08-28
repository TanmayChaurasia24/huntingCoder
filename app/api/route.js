import * as fs from 'fs/promises'; 
import path from 'path';

export async function GET(req) {
    try {
        let myfile;
        let allblogs = [];
        const filePath = path.join(process.cwd(), 'blogsdata');
        const data = await fs.readdir(filePath);     
        for(let index = 0 ; index < data.length ; index++) {
            const item = data[index];

            myfile = await fs.readFile(('blogsdata/'+item),"utf-8");
            allblogs.push(JSON.parse(myfile)); 
        }
        return new Response(JSON.stringify(allblogs));
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
