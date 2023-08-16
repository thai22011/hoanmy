import Link from "next/link";

const about = () => {
  return (
    <div>
      This is the about us page
      <Link href="/contact">Contact Page</Link>
    </div>
  );
};

export default about;
