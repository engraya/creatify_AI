"use server"

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

type FormTypes = {
    title : any;
    description : any;
    templateUsed : any
}


export async function createContentAction({ title, description, templateUsed } : FormTypes) {
  try {
    const user = await currentUser();
    const userId = user?.id;

    if (!userId) {
      throw new Error("User Not Authenticated");
    }

    const createNewDoc = await db.aIOutput.create({
      data: {
        userId: userId,
        title: title,
        description: description,
        templateUsed: templateUsed,
      },
    });
    return createNewDoc;
  } catch (error) {
    throw new Error("Error while creating new document");
  }
}
