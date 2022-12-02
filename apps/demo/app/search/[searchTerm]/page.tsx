import Image from "next/image";
import Link from "next/link";
import { searchPosts } from "../../../lib/gql/queries";
import { graphqlClient } from "../../../lib/graphql-clientl";

const search: any = async (searchTerm: string) => {
  const {
    searchPosts: { posts, totalCount },
  } = await graphqlClient.request(searchPosts, {
    searchPost: {
      search_term: searchTerm,
      page: 1,
      limit: 10,
    },
  });
  return { posts, totalCount };
};

export interface SearchProps {
  value: any;
  params: {
    searchTerm: string;
  };
}

export default async function SearchResults({
  params: { searchTerm },
}: SearchProps) {
  const { posts, totalCount } = await search(searchTerm);

  return (
    <div className="-mt-4 ml-56 mb-24 max-w-3xl flex flex-col justify-start">
      <p className="ml-4 mt-10 mb-3">Total Results: {`${totalCount}`}</p>
      {searchTerm && (
        <div className="ml-4 mr-4 mb-5">
          {posts?.map((post: any) => {
            return (
              <div className="flex flex-col mb-10">
                <div className="flex items-center">
                  <Link
                    href={{
                      pathname: "post/[postTitle]",
                      query: {
                        postTitle: post.title,
                        title: post.title,
                      },
                    }}
                    className="mr-[0.6rem]"
                  >
                    <Image
                      width={25}
                      height={25}
                      src={post.imageUrl}
                      className=""
                      alt="result Image"
                    />
                  </Link>
                  <Link
                    className="text-[#0d6efd] underline"
                    href={{
                      pathname: `post/${post.title}`,
                    }}
                  >
                    {post.link}
                  </Link>
                </div>

                <a className="mt-1 text-[#0d6efd] underline" href={post.link}>
                  {post.title}
                </a>
                <p className="mt-2">{post.snippet}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
