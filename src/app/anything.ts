"use server";

export default async function getMessage() {
  return "Hello World!";
}

export async function sendMessage(formData: FormData) {
  const message = formData.get("message");
  console.log(message);
}
