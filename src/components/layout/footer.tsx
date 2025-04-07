// src/components/layout/footer.tsx
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        {/* 로고 */}
        <div className="mb-4">
          <Image
            src="/morr_logo.png"
            alt="MORR Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Privacy Policy | Terms of Use */}
        <p
          className="text-xl sm:text-base text-center"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <a href="https://docs.google.com/document/d/1W1KWgADkllHhN1Iw6gFh4ShdxbauTKr59U-17wJEmI8/edit?usp=sharing" className="hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a
            href="https://docs.google.com/document/d/1Xx09Y3iccTt3iBWpB1nQuCXyHIZ9d0AtzIRiE5wZs84/edit?usp=sharing"
            className="hover:underline"
          >
            Terms of Use
          </a>
        </p>

        {/* Find us: [Facebook | LinkedIn | Instagram] */}
        <p
          className="text-xl sm:text-base text-center"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Find us:
          {/* <a href="https://facebook.com" className="hover:underline">
            Facebook
          </a>{" "} */}{" "}
          <a
            href="https://www.linkedin.com/company/morrmy/"
            className="hover:underline"
          >
            LinkedIn
          </a>{" "}
          {/* <a href="https://instagram.com" className="hover:underline">
            Instagram
          </a> */}
        </p>

        {/* © 2025 MORR Technologies Sdn Bhd – Born and bred in Malaysia. */}
        <p
          className="text-xl sm:text-base text-center"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          © 2025 MORR Technologies Sdn Bhd – Born and bred in Malaysia.
        </p>
      </div>
    </footer>
  );
}
