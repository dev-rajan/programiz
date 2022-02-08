import React, { useState } from "react";
import Link from "next/link";
import { FiSearch, FiX } from "react-icons/fi";
import { useRouter } from "next/router";
import SEO from "components/SEO";

const PageNotFound = () => {
  const searchPath = "/search?q=";

  const [inputText, setInputText] = useState();
  const router = useRouter();

  const onSearch = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      router.push(`${searchPath}${inputText}`);
      handleToggle();
    }
    router.push(`${searchPath}${inputText}`);
  };

  return (
    <section className="section-padding padding-404">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="text-center">
              <img
                src="/images/404.svg"
                alt="404, something's wrong"
                title="404, something's wrong"
              />
              <h1 className="mb-4x mt-6x">Hmm, Something&apos;s Wrong</h1>
              <p>
                The page you have been looking for has been either deleted or
                moved.
              </p>
            </div>
            <div className="search-wrapper empty-page mb-6x mt-8x">
              <div className="input-group--w-icon">
                <form onSubmit={onSearch}>
                  <input
                    onChange={(e) => setInputText(e.target.value)}
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search Programiz PRO"
                    aria-label="Search Programiz Pro"
                  />
                  <div className="input-group-prepend d-none d-sm-inline-flex">
                    <FiSearch size={24} />
                  </div>
                  <a href="#" className="search-cross btn btn--icon p-0x">
                    <FiX size={24} />
                  </a>
                  <button
                    onClick={onSearch}
                    type="button"
                    className="btn btn--primary btn--sm btn-search"
                  >
                    <span className="d-flex d-sm-none">
                      <FiSearch size={24} />
                    </span>
                    <span className="d-none d-sm-inline-block">Search</span>
                  </button>
                </form>
              </div>
            </div>
            <div className="text-center">
              <p className="text-bold">OR</p>
              <Link href="/">
                <a
                  className="btn btn--primary btn--sm"
                  title="Go to Homepage"
                  alt="Go to Homepage"
                >
                  Go to Homepage
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default () => {
  return (
    <>
      <SEO title="404" />
      <PageNotFound />
    </>
  );
};
