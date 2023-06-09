import React, {useState} from 'react';
import styled from "styled-components"
import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import {useRouter} from "next/router";

const Wrapper = styled.div`
  background: #EEF5FF;
  min-height: 100vh;
  width: 100%;
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

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Form = styled.form`
  background: white;
  border-radius: 15px;
  padding: 30px;
  max-width: 500px;
  width: 100%;
`

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

const Input = styled.input`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
  padding: 5px 10px;
  border: 1px solid darkblue;
`

const TextLabel = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 5px;
  color: #222222;
`

const Textarea = styled.textarea`
  width: 100%;
  min-height: 200px;
  resize: none;
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
  padding: 5px 10px;
  border: 1px solid darkblue;
  margin-bottom: 5px;
`

const FormBtn = styled.button`
  width: 139px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: white;
  background: #67BFFF;
  box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
  border-radius: 10px;
  border: none;
  margin: 0 auto;
  cursor: pointer;
  
  :hover {
    box-shadow: 0px 0px 25px rgba(148, 174, 213, 1);
    transition: .3s all ease;
  }
`

export default function AddPost() {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const router = useRouter()

    const addPost = async () => {
        try {
            await axios.post("http://localhost:8000/api/post/add", {
                title, text, imgUrl
            })
        } catch (e) {
            console.log(e)
        }

    }

    const handleSubmit = () => {
        addPost()
        setTitle("")
        setText("")
        setImgUrl("")
        router.push("/")
    }

    return (
        <>
            <Wrapper>
                <Head>
                    <title>Posts</title>
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
                    <FormWrapper>
                        <Form onSubmit={(e) => e.preventDefault()}>
                            <InputField>
                                <TextLabel>Название статьи</TextLabel>
                                <Input value={title} onChange={e => setTitle(e.target.value)} />
                            </InputField>

                            <InputField>
                                <TextLabel>Текст статьи</TextLabel>
                                <Textarea value={text} onChange={e => setText(e.target.value)}  />
                            </InputField>

                            <InputField>
                                <TextLabel>URL картинки</TextLabel>
                                <Input value={imgUrl} onChange={e => setImgUrl(e.target.value)}  />
                            </InputField>

                            <FormBtn onClick={handleSubmit}>Создать</FormBtn>
                        </Form>
                    </FormWrapper>
                </div>
            </Wrapper>
        </>

    );
};
