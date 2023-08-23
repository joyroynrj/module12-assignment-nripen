import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <div className="space-y-6" id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>
              4<span>0</span>4
            </h1>
          </div>

          <p>
           Not Found
          </p>

          <Link href="/">Return Home</Link>
        </div>
      </div>
    </div>
  );
}
