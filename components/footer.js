import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="flex justify-center">
   
    <div>
      <p className="text-center">Made with ❤️ by Bechera Chapman-Tremblay</p>
      <div className="flex flex-row">
      <div className="flex flex-row">
        <p className="m-2">Buy me a coffee</p>
        <img className="w-4 m-2" src="https://imgs.search.brave.com/MPFY0x_7aaCvZ75gkrYk-YNr0mJlDLAKr-ZI_Up-YVo/rs:fit:829:1200:1/g:ce/aHR0cHM6Ly91c2Vy/Y29udGVudDIuaHVi/c3RhdGljLmNvbS8x/NTI3MDU3MV9mMTAy/NC5qcGc"></img>
      </div>

      <div className="flex flex-row">
        <p className="m-2">Sanity</p>
        <img className="w-6 m-2" src="https://imgs.search.brave.com/KK34vDGXZvhhg2jFxozojNrL_DOgQjq_pDMo8VMbiI8/rs:fit:128:128:1/g:ce/aHR0cHM6Ly9zYW5p/dHktaW8uZ2FsbGVy/eWNkbi52c2Fzc2V0/cy5pby9leHRlbnNp/b25zL3Nhbml0eS1p/by92c2NvZGUtc2Fu/aXR5LzAuMS40LzE2/MTExMTA0NjY3MDkv/TWljcm9zb2Z0LlZp/c3VhbFN0dWRpby5T/ZXJ2aWNlcy5JY29u/cy5EZWZhdWx0"></img>
      </div>

      <div className="flex flex-row">
        <p className="m-2">Vercel</p>
        <img className="w-6 m-2" src="https://imgs.search.brave.com/lto-tDKPx-XmntZR6bPYwjHbI4Axo_yT2O-swNj0PjM/rs:fit:128:128:1/g:ce/aHR0cHM6Ly9sb2dv/LmNsZWFyYml0LmNv/bS92ZXJjZWwuY29t"></img>
      </div>
      </div>

    </div>

    </footer>
  )
}
