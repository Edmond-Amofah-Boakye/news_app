import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY as string,
    secretAccessKey: process.env.AWS_SECRET_KEY as string,
  },
});


export class FileUpload {
  //upload to s3
  async uploadFile(fileBuffer: any, file: any) {
    const Key = `${uuidv4()}.${file}`;

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key,
      Body: fileBuffer,
      ContentType: "image/jpg",
    };

    const command = new PutObjectCommand(params);
    await s3Client.send(command);
    return Key;
  }

  async uploadMulti(fileBuffer: any[], files: string) {
    const filesKeys: string[] = [];

    for await (const file of files) {
      const fileId = await this.uploadFile(fileBuffer, file);
      filesKeys.push(fileId);
    }

    return filesKeys.join(",");
  }

  async deleteFile(fileKey: string) {
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: fileKey,
    };
    const command = new DeleteObjectCommand(params);
    await s3Client.send(command);
  }

  async deleteMulti(files: string) {
    const filesIds: string[] = files.split(",");
    for await (const file of filesIds) {
      await this.deleteFile(file);
    }
  }


  async updateFile(fileBuffer: any, file: string, prevFileId: string){
    if(file){
        await this.deleteFile(prevFileId)
        const fileId = await this.uploadFile(fileBuffer, file)
        return fileId;
    }
  }

//   async updateMulti(fileBuffer: any[], file: string, prevFileId: string){
//     //check if new file is uploaded
//     //get all the files and check the one you want to update
//     //remove from the s3
//     //upload the new one
//     //save the id return and not all were updated all it to the remainng ids and save all in the datebase
//   }
}


