import Spinner from "./spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECS } from "../queries/projectQueries";

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECS);

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong!</p>;

  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
}
