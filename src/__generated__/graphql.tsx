import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Cat = {
  __typename?: 'Cat';
  address: Scalars['String'];
  categoryName: Scalars['String'];
  id: Scalars['Float'];
  isGood?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  ownerName: Scalars['String'];
};

export type CreateAccountInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  role: UserRole;
};

export type CreateAccountOutput = {
  __typename?: 'CreateAccountOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateCatDto = {
  address: Scalars['String'];
  categoryName: Scalars['String'];
  isGood?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  ownerName: Scalars['String'];
};

export type EditProfileInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type EditProfileOutput = {
  __typename?: 'EditProfileOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: CreateAccountOutput;
  createCat: Scalars['Boolean'];
  editProfile: EditProfileOutput;
  login: LoginOutput;
  updateCat: Scalars['Boolean'];
  verifyEmail: VerifyEmailOutput;
};


export type MutationCreateAccountArgs = {
  input: CreateAccountInput;
};


export type MutationCreateCatArgs = {
  input: CreateCatDto;
};


export type MutationEditProfileArgs = {
  input: EditProfileInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationUpdateCatArgs = {
  input: UpdateCatDto;
};


export type MutationVerifyEmailArgs = {
  input: VerifyEmailInput;
};

export type Query = {
  __typename?: 'Query';
  getAllCats: Array<Cat>;
  me: User;
  myCat: Array<Cat>;
  userProfile: UserProfileOutput;
};


export type QueryMyCatArgs = {
  wow: Scalars['Boolean'];
};


export type QueryUserProfileArgs = {
  userId: Scalars['Float'];
};

export type UpdateCatDto = {
  data: UpdateCatInputType;
  id: Scalars['Float'];
};

export type UpdateCatInputType = {
  address?: InputMaybe<Scalars['String']>;
  categoryName?: InputMaybe<Scalars['String']>;
  isGood?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  ownerName?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Float'];
  password: Scalars['String'];
  role: UserRole;
  updatedAt: Scalars['DateTime'];
  verified: Scalars['Boolean'];
};

export type UserProfileOutput = {
  __typename?: 'UserProfileOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
};

export enum UserRole {
  Client = 'Client',
  Delivery = 'Delivery',
  Owner = 'Owner'
}

export type VerifyEmailInput = {
  code: Scalars['String'];
};

export type VerifyEmailOutput = {
  __typename?: 'VerifyEmailOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type GetAllCatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCatsQuery = { __typename?: 'Query', getAllCats: Array<{ __typename?: 'Cat', id: number, name: string, isGood?: boolean | null | undefined, ownerName: string, categoryName: string }> };


export const GetAllCatsDocument = gql`
    query GetAllCats {
  getAllCats {
    id
    name
    isGood
    ownerName
    categoryName
  }
}
    `;

/**
 * __useGetAllCatsQuery__
 *
 * To run a query within a React component, call `useGetAllCatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCatsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCatsQuery, GetAllCatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCatsQuery, GetAllCatsQueryVariables>(GetAllCatsDocument, options);
      }
export function useGetAllCatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCatsQuery, GetAllCatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCatsQuery, GetAllCatsQueryVariables>(GetAllCatsDocument, options);
        }
export type GetAllCatsQueryHookResult = ReturnType<typeof useGetAllCatsQuery>;
export type GetAllCatsLazyQueryHookResult = ReturnType<typeof useGetAllCatsLazyQuery>;
export type GetAllCatsQueryResult = Apollo.QueryResult<GetAllCatsQuery, GetAllCatsQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    