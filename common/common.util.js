import AWS from "aws-sdk";

AWS.config.update({
  credentials: {
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
  },
});

export const uploadFile = async (file, id, folder) => {
  const { filename, createReadStream } = await file;
  const readStream = createReadStream();
  const newFile = `${folder}/${id}${Date.now()}${filename}`;
  const { Location } = await new AWS.S3()
    .upload({
      Bucket: process.env.AWS_BUCKET,
      Key: newFile,
      Body: readStream,
      ACL: "public-read",
    })
    .promise();

  return Location;
};
