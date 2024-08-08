import Image from "next/image";
import styles from "./page.module.css";
import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
import { comments } from "@/libs/comments";
import { useState} from "react";
export default function Home() {
  //const [users, setUsers] = useState([]);
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwnner name='Natdanai Kamthornkittikul'studentid='660610755'/>
        {/* Comment Example */}
        
        {/* Reply Example */}

        {/* map-loop render Comment component here */}
        {comments.map((user:any) => (
        <Comment key={user}{...user[0]} />
        ))}
      </div>
    </div>
  );
}
