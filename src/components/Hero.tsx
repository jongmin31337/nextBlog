import Image from "next/image"
import profileImage from '../../public/images/profile.jpg'
import Link from "next/link"
export default function Hero() {
    return (
        //HERO : 웹사이트에서 처음 보여지는 사진이있고, 페이지 소개글, 사용자가 클릭하는 버튼 등을 즉 웹 페이지를 상징하는 거를 나타나는거
        // 가장 중요할 수 있는 PRIORITY속성을 제공
      <section className="text-center">
        <Image className="rounded-full mx-auto" src={profileImage} alt="Profile Image" width={250} height={250} priority/>
        <h2 className="text-3xl font-bold mt-2">{"Hi, I'm JJONG"}</h2>
        <h3 className="text-xl font-semibold">Front-end Enginner</h3>
        <Link href='/contact'>
            <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">
                Contact Me
            </button>
        </Link>
      </section>
    )
  }
  