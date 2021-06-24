import { useQuery } from "@apollo/client";
import Link from 'next/link';
import { VFC } from "react";
import { GET_USERS } from "../queries/queries";
import { GetUsersQuery } from "../types/generated/graphql";
import { Layout } from '../components/Layout';

const FetchMain: VFC = () => {
  const { data, error } = useQuery<GetUsersQuery>(GET_USERS, {
    fetchPolicy: 'network-only',
  })
  if (error)
  return (
    <Layout title="Hasura fetchPolicy">
      <p>Error: {error.message}</p>
    </Layout>
  )
  return (
    <Layout title="Hasura fetchPolicy">
      <p className="mb-6 font-bold">Hasura main page</p>
      {console.log(data)}
      {data?.users.map((user) => {
        return (
          <p className="my-1" key={user.id}>
            {user.name}
          </p>
        )
      })}
      <Link href="/hasura-sub">
        <a className="mt-6">Next</a>
      </Link>
    </Layout>
  )
}
export default FetchMain
