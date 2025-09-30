"use server";
import { getUserSession } from "@/helpers/getUserSession";
import fs from "fs";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import path from "path";

//kuno function k server action function e convert korte hole evabe ekdm upore ei line ta dite hbe

export const createBlog = async (data: FormData) => {

  const session = await getUserSession();
  // server action func ta async func hote hobe.
  // console.log({...data, authorId:7});// wrong way -> right way-nise
  const blogInfo = Object.fromEntries(data.entries());

  // ----------------start-fileOrImageUploader-----------
  const file = data.get("thumbnail") as File | null;
  let imageUrl: string;

  if (file && typeof file === "string") {
    // ধরুন file = "https://example.com/image.png"
    imageUrl = file;
  } else if (file && file instanceof File) {
    // লোকাল ফাইল হলে তখন সেভ করবেন
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = path.join(process.cwd(), "public/uploads", file.name);
    fs.writeFileSync(filePath, buffer);

    imageUrl = `/uploads/${file.name}`;
  } else {
    imageUrl = "/uploads/n1.png"; // fallback
  }

  // ----------------end-fileOrImageUploader-----------

  const modifiedData = {
    ...blogInfo,
    authorId: session?.user.id,
    thumbnail: imageUrl,
    isFeatured: Boolean(blogInfo.isFeatured),
    tags: blogInfo.tags
      .toString()
      .split(",")
      .map((tag) => tag.trim()),
  };
  // console.log(modifiedData);
  // ------------
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/create`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(modifiedData),
  });

  //   -------------
  const result = await res.json();
  // console.log("result----- ",result);
  // const toastId = toast.loading("loading...");


    if (result?.success === true) {
      revalidateTag("BLOG");
      // revalidatePath("/pathOrRouteName");
      // revalidatePath("/blogs");
         console.log("successTrue----",result)
      redirect("/blogs"); // ekane route.push kora jiana karon eta server action kinba server compo te redirect tai use korte hoi jodi kuno route e navigate korte hoi.
   
    }
             console.log("successFalse----",result)
 return result;
};

// but jodi onno kuno component / kinba client component e erokom server action func/ kinba server func use korar drkr hoi tahole niser niome likte hbe.jmn:
/* 
export const OnnoCompo = () => {
...

const create = async ( data : FormData) =>{// server action func ta async func hote hobe.
"use server";// eta serverAction func er pet er ekdm top/upore likte hbe evabe.
console.log(data)
....
};
}
*/
