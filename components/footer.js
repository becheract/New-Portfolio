import Vercel from "../public/images/vercel.webp";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="flex justify-center my-7 align-center">
      <div>
        <p className="text-center">Made with ❤️ by Bechera Chapman-Tremblay</p>
        <div className="flex flex-row justify-center">
          <div className="flex flex-row">
            <p className="m-2">Sanity</p>
            <img
              className="w-6 m-2"
              alt="Sanity"
              id="image"
              src="https://imgs.search.brave.com/KK34vDGXZvhhg2jFxozojNrL_DOgQjq_pDMo8VMbiI8/rs:fit:128:128:1/g:ce/aHR0cHM6Ly9zYW5p/dHktaW8uZ2FsbGVy/eWNkbi52c2Fzc2V0/cy5pby9leHRlbnNp/b25zL3Nhbml0eS1p/by92c2NvZGUtc2Fu/aXR5LzAuMS40LzE2/MTExMTA0NjY3MDkv/TWljcm9zb2Z0LlZp/c3VhbFN0dWRpby5T/ZXJ2aWNlcy5JY29u/cy5EZWZhdWx0"
            ></img>
          </div>

          <div className="flex flex-row justify-center">
            <p className="m-2">Vercel</p>
            <img
              className="w-6 h-auto m-auto"
              id="image"
              alt="Vercel"
              src="https://imgs.search.brave.com/3BGwaQEOps8he8MeZu_ESR-QX89PbU8pcnaIhnscMhI/rs:fit:194:192:1/g:ce/aHR0cHM6Ly9hc3Nl/dHMudmVyY2VsLmNv/bS9pbWFnZS91cGxv/YWQvdjE1ODg4MDU4/NTgvcmVwb3NpdG9y/aWVzL3ZlcmNlbC9s/b2dvLnBuZw"
            ></img>
          </div>

          <div className="flex flex-row justify-center">
            <p className="m-2">Next</p>
            <img
              className="w-6 h-auto m-auto"
              id="image"
              alt="Next.js"
              src="https://imgs.search.brave.com/1s6Fe8cKnzHUdja9soquk20znK4Z8WYtSuQuwOY7lHA/rs:fit:300:300:1/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL04vbmV4dC1q/cy1pY29uLWxvZ28t/RUUzMDJENURCRC1z/ZWVrbG9nby5jb20u/cG5n"
            ></img>
          </div>
        </div>
      </div>
    </footer>
  );
}
