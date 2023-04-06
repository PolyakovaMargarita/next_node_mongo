import Navbar from "../components/Navbar";
import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
  background: #EEF5FF;
  min-height: 100vh;
  width: 100%;
`

const PostsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 25px;
`

const Post = styled.div`
  width: 350px;
  height: 270px;
  border-radius: 15px;
  margin-top: 50px;
  cursor: pointer;
  position: relative;
  background: url('${props => props.bgImage}') center / cover no-repeat;
  :hover {
    transform: scale(1.1);
    transition: .3s all ease;
  }
`

const PostTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  padding: 15px 20px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  color: #3260A1;
  background: white;
  border-radius: 0px 0px 15px 15px;
`

export default function Home({posts}) {

    if (!posts) "Loading..."

  return (
    <>
        <Head>
            <title>Posts</title>
        </Head>
        <Navbar/>
        <Wrapper>
            <div className="container">
                <PostsWrapper>
                    {
                        posts.map((post, index) =>
                            <Link href={'/post/[id]'} as={`/post/${post._id}`} key={index} >
                                <Post bgImage={post.imgUrl}>
                                    <PostTitle>{post.title}</PostTitle>
                                </Post>
                            </Link>
                        )
                    }
                </PostsWrapper>
            </div>
        </Wrapper>
    </>
  )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:8000/api/post`)
    const posts = await res.json()

    if(!posts) {
        return {
            notFound: true,
        }
    }
    // Pass data to the page via props
    return { props: { posts } }
}
