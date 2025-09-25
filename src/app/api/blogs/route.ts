import { NextResponse } from "next/server";

export const blogs = [
        
            {
                "id": 49,
                "title": "wsd",
                "content": "dsfsda",
                "thumbnail": "/uploads/download.jpg",
                "isFeatured": true,
                "tags": [
                    "tag1",
                    "tag2"
                ],
                "view": 0,
                "createdAt": "2025-09-23T08:20:57.098Z",
                "updatedAt": "2025-09-23T08:20:57.098Z",
                "authorId": 9,
                "author": {
                    "id": 9,
                    "name": "sakib",
                    "email": "sakib@gmail.com",
                    "picture": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/382800/382811.1.png",
                    "isVerified": false
                }
            },
            {
                "id": 48,
                "title": "ujktumnyh",
                "content": ",iiykm",
                "thumbnail": "/uploads/download.jpg",
                "isFeatured": true,
                "tags": [
                    "tag1",
                    "tag2"
                ],
                "view": 0,
                "createdAt": "2025-09-23T08:19:44.079Z",
                "updatedAt": "2025-09-23T08:19:44.079Z",
                "authorId": 9,
                "author": {
                    "id": 9,
                    "name": "sakib",
                    "email": "sakib@gmail.com",
                    "picture": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/382800/382811.1.png",
                    "isVerified": false
                }
            },
            {
                "id": 47,
                "title": "abc",
                "content": "sdfsadfsd",
                "thumbnail": "/uploads/download.jpg",
                "isFeatured": true,
                "tags": [
                    "tag1",
                    "tag2"
                ],
                "view": 0,
                "createdAt": "2025-09-23T08:18:34.757Z",
                "updatedAt": "2025-09-23T08:18:34.757Z",
                "authorId": 9,
                "author": {
                    "id": 9,
                    "name": "sakib",
                    "email": "sakib@gmail.com",
                    "picture": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/382800/382811.1.png",
                    "isVerified": false
                }
            },

        ];

export async function GET() {
//   return Response.json({ message: "Hello world" });
  return Response.json(blogs);
};

export const POST = async (request : Request) =>{
    const blog =await request.json(); 
    const newBlog = {
        ...blog ,
        id : blogs.length + 1,
    };

    blogs.push(newBlog);
    return new NextResponse(JSON.stringify(newBlog), {
        status : 201,
        headers : {
            "content-type" : "application/json"
        }
    });
}

