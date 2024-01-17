import { Loader } from 'components/Loader/Loader';
import { PopularMoviesStart } from 'components/PopularMovies/PopularMoviesStart';
import Notiflix from 'notiflix';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { requestMoviesByQuery } from 'services/api';
import { StyledFormButton, StyledFormDiv, StyledFormInput } from 'styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [moviesQuery, setMoviesQuery] = useState(null);
  const query = searchParams.get('film') || '';

  useEffect(() => {
    if (query === null) return;
    const fetchMovieByQuery = async () => {
      try {
        setIsLoading(true);
        const { results } = await requestMoviesByQuery(query);
        setMoviesQuery(results);
      } catch (error) {
        Notiflix.Notify.warning(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieByQuery();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const search = e.currentTarget.elements.searchInput.value;
    setSearchParams({
      film: search,
    });
  };
  return (
    <div>
      <StyledFormDiv>
        <form onSubmit={handleSubmit}>
          <StyledFormInput
            type="text"
            name="searchInput"
            placeholder="Search movies..."
            defaultValue={query}
            required
          />
          <StyledFormButton type="submit">Search</StyledFormButton>
        </form>
      </StyledFormDiv>
      {isLoading && <Loader />}
      {moviesQuery !== null && moviesQuery.length > 0 && (
        <PopularMoviesStart MoviesData={moviesQuery} />
      )}
    </div>
  );
};

export default Movies;
