import type { components } from "@/src/lib/backend/apiV1/schema";

type PostDto = components["schemas"]["PostDto"];
type PageDtoPostDto = components["schemas"]["PageDtoPostDto"];

export default async function Page() {
  const response = await fetch("http://localhost:8080/api/v1/posts");
  const body: PageDtoPostDto = await response.json();
  return (
    <div>
      <div>currentPageNumber: {body.currentPageNumber}</div>

      <div>pageSize: {body.pageSize}</div>

      <div>totalPages: {body.totalPages}</div>

      <div>totalItems: {body.totalItems}</div>

      <ul>
        {body.items?.map((item: PostDto) => (
          <li key={item.id} className="border-[2px] border-[red] my-3">
            <div>id : {item.id}</div>
            <div>createDate : {item.createDate}</div>
            <div>modifyDate : {item.modifyDate}</div>
            <div>authorId : {item.authorId}</div>
            <div>authorName : {item.authorName}</div>
            <div>title : {item.title}</div>
            <div>published : {`${item.published}`}</div>
            <div>listed : {`${item.listed}`}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
