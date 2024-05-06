import { URL, URLSearchParams } from "node:url";

export default () => {
    const urlString = "https://www.example.com/cucina/2023/9?query=123&sort=ascending&nome=mario&anno=2024&apiKey=jkdkjd8jnsdf9898sdfkj";
    const parsedUrl = new URL(urlString);

    console.log("host:", parsedUrl.hostname);
    console.log("path:", parsedUrl.pathname);
    console.log("query:", parsedUrl.searchParams.get("query"));
    console.log("apiKey:", parsedUrl.searchParams.get("apiKey"));

    const baseUrl = "https://www.amazon.com";
    const path = "/products";
    const queryString = { category: "electronics", page: "1", limit: "20" };
    const constructedUrl = new URL(path, baseUrl);
    constructedUrl.search = new URLSearchParams(queryString).toString();

    console.log(constructedUrl.searchParams.get("category"));
}
