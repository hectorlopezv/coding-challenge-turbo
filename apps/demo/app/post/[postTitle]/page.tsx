import Image from "next/image";
import { findOnePost } from "../../../lib/gql/queries";
import { graphqlClient } from "../../../lib/graphql-clientl";

const findPost: any = async (titleReq: string) => {
  let res = titleReq;
  res = res.replace("%20", " ");
  const {
    findOnePost: { title, snippet, imageUrl },
  } = await graphqlClient.request(findOnePost, {
    findOnePost: {
      title: res,
    },
  });
  return { title, snippet, imageUrl };
};

export default async function Post({ params }: any) {
  const { title, snippet, imageUrl } = await findPost(params.postTitle);

  return (
    <div className="mt-4 ml-56 mb-24 max-w-3xl flex flex-col justify-start">
      <p className="mt-4 mb-2">{title}</p>
      <Image
        width={25}
        height={25}
        src={imageUrl}
        className=""
        alt="result Image"
      />
      <p className="mt-2">{snippet}</p>
    </div>
  );
}
