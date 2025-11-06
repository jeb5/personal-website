import { GoDownload } from "react-icons/go";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

import Button from "./Button";
import Curio from "./Curio";
export default function Hero({ RESUME_URL }: { RESUME_URL: string }) {
  return (
    <div
      id="about"
      className="w-full pb-[80px] px-10 sm:px-20 flex flex-row justify-center mdlg:h-[calc(90vh-100px)] items-center mdlg:max-h-[700px] min-h-[420px]"
    >
      <div className="flex mdlg:flex-row items-center flex-col justify-between w-full max-w-[980px] pt-8 mdlg:pt-0">
        <div className="mdlg:pr-20 lg:pr-25 flex flex-col justify-between grow max-w-[580px] min-w[320px]">
          <div>
            <h1 className="text-4xl font-medium mb-4 mt-4">Jeb Nicholson</h1>
            <div className="text-lg">
              <p className="pb-4">Student, Aspiring Software Engineer</p>
              <p>
                BSc Computer Science at The University of Otago
                <br />
                Currently working towards an Honours degree
              </p>
            </div>
          </div>
          <div className="flex flex-col xsm:flex-row xsm:justify-between justify-center xsm:items-end mt-6 mb-4 gap-y-6">
            <div className="flex flex-row gap-4">
              <Button className="grow xsm:grow-0" href={RESUME_URL} download>
                Resume <GoDownload className="ml-2" aria-hidden />
              </Button>
              <Button className="grow xsm:grow-0" href="mailto:hello@jebnicholson.com">
                Email me
              </Button>
            </div>
            <div className="flex flex-row gap-4 mb-1 text-3xl opacity-85">
              <a href="https://github.com/jeb5" target="_blank" rel="noopener" aria-label="GitHub">
                <FaGithub aria-hidden />
              </a>
              <a href="https://www.linkedin.com/in/jeb5/" target="_blank" rel="noopener" aria-label="LinkedIn">
                <FaLinkedin aria-hidden />
              </a>
            </div>
          </div>
        </div>
        <Curio />
      </div>
    </div>
  );
}
