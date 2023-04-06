import React from 'react';
import styled from "styled-components";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import {useRouter} from "next/router";

const Wrapper = styled.div`
  background: #EEF5FF;
  min-height: 100vh;
  width: 100%;
  padding-bottom: 100px;
`

const BackBtn = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
  border-radius: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #3260A1;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;
  outline: none;
  height: 45px;
  width: 117px;
  :hover {
    box-shadow: 0px 0px 35px rgba(148, 174, 213, 1);
    transition: .3s all ease;
  }
`

const PostWrapper = styled.div`
  display: flex;
  background: #FEFEFE;
  border-radius: 15px;
  margin-top: 50px;
  position: relative;
`

const PostItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
  padding: 35px;
  justify-content: center;
`

const PostTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #3260A1;
  margin-bottom: 25px;
`

const PostText = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`

const DelPost = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  background: #EB5050;
  box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
  border-radius: 10px;
  width: 139px;
  height: 25px;
  left: 50%;
  bottom: -12px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transform: translate(-50%);

  :hover {
    box-shadow: 0px 0px 25px rgba(148, 174, 213, 1);
    transition: .3s all ease;
  }
`

const Post = ({post}) => {
    const router = useRouter()

    if (!post) "Loading..."

    const removePost = async () => {
        try {
            await axios.post(`http://localhost:8000/api/post/remove`, {
                id: post._id
            })
                .then(res => {
                    if(res.data === "good") {
                        router.push("/")
                    }
                }
            )
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <Wrapper>
                <Head>
                    <title>Post | {post.title}</title>
                </Head>
                <Navbar/>
                <div className="container">
                    <Link href="/">
                        <BackBtn>
                            <Image
                                src="/static/back.svg"
                                alt="Picture back"
                                width={24}
                                height={15}
                            />
                            Назад
                        </BackBtn>
                    </Link>
                    <PostWrapper>
                        <PostItem>
                            <PostTitle>{post.title}</PostTitle>
                            <PostText>{post.text}</PostText>
                        </PostItem>
                        <PostItem>
                            <Image
                                src={post.imgUrl}
                                alt="Picture"
                                width={500}
                                height={315}
                            />
                        </PostItem>
                        <DelPost onClick={removePost}>Удалить статью</DelPost>
                    </PostWrapper>
                </div>
            </Wrapper>
        </>
    );
};

export async function getServerSideProps( context ) {
    // Fetch data from external API
    const { id } = context.query
    const res = await fetch(`http://localhost:8000/api/post/${id}`)
    const post = await res.json()

    if(!post) {
        return {
            notFound: true,
        }
    }
    // Pass data to the page via props
    return { props: { post } }
}

export default Post;