import { FaFilePdf } from 'react-icons/fa6';

export default function ResumePage() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-medium">Resume</h2>
      <a
        href="/Anthony_Vo_Resume.pdf" // Append /public/ to the front of the link to test in development
        target="_blank"
        rel="noopener noreferrer"
        className="bg-text text-background mt-6 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-opacity hover:opacity-90"
      >
        <FaFilePdf size={20} />
        View Resume
      </a>
    </section>
  );
}
