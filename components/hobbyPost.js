import Date from "../components/date";
import Link from "next/link";
import CoverImage from "../components/cover-image";

export default function HeroPost({
  title,
  date,
  hobbyCategory,
  images,
  slug,
  placeholder,
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} image={placeholder} priority />
      </div>

      <div className="mb-20 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
            <Link href={`/posts/${slug}`}>
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <Date dateString={date} />
          </div>
        </div>
        {/* <div>
          {hobbyCategory.map((category, index) => {
            console.log(hobbyCategory);
            if (category === undefined || null) {
              return <></>;
            } else {
              return (
                <>
                  <h1>{category.name}</h1>
                </>
              );
            }
          })}
        </div> */}
      </div>
    </section>
  );
}
