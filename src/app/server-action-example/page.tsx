import { sendMessage } from "@/app/anything";

const Page = () => {
  return (
    <div>
      <h1>서버 액션 예제</h1>
      <form action={sendMessage}>
        <label htmlFor="message">메시지</label>
        <input type="text" name="message" />
        <button type="submit">전송</button>
      </form>
    </div>
  );
};

export default Page;
