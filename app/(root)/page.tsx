import SearchForm from "@/app/components/SearchForm";
import { auth } from "@/auth";
import StartUpCard from "@/app/components/StartUpCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  const session = await auth();

  console.log(session?.id);

  const posts = [{
    _createdAt: new Date,
    _updatedAt: new Date,
    views: 55,
    author:  {_id: 1},
    Id: 1,
    description: "This is a description",
    image: "https://www.istockphoto.com/photo/irobot-touch-gm543190650-97417669",
    category: "Robots",
    title: "Robots"
  }]


  return (
    <>
    <section className="pink_container">
    <h1 className="heading">
      Pitch Your Startup, <br />
      Connect With Entrepreneurs
    </h1>

    <p className="sub-heading !max-w-3xl">
      Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
      Competitions.
    </p>

    <SearchForm query={query} />
  </section>

  <section className="section_container">
    <p className="text-30-semibold">
      {query ? `Search results for "${query}"` : "All Startups"}
    </p>

    <ul className="mt-7 card_grid">
      {posts?.length > 0 ? (
        posts.map((post: StartupTypeCard) => (
          <StartUpCard key={post?._id} post={post} />
        ))
      ) : (
        <p className="no-results">No startups found</p>
      )}
    </ul>
  </section>

  {/* // <SanityLive /> */}
</>
  );
}
