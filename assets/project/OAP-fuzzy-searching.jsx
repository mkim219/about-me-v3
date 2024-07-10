import React from 'react';

const OapFuzzySearching = () => {
    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header bg-secondary text-white">
                    <h2>Fuzzy Searching Feature</h2>
                </div>
                <div className="card-body">
                    <div className="row mb-2">
                        <img src="./assets/static/demo/fuzzy-searching-demo.gif" alt="advanced map demo in OAP with admin account"/>
                    </div>
                    <h3>Overview <span className="mx-1 h5"><a href="https://ominous.app/" target="_blank"><i
                        className="fa-solid fa-link"></i></a></span></h3>
                    <p>The Fuzzy Searching feature provides a robust global search capability, allowing users to find
                        specific locations by browsing through countries, states, counties, sub-counties, and locations.
                        The feature also supports partial searches to enhance user experience.</p>
                    <h3>Role and Contributions</h3>
                    <ul>
                        <li><strong>Role:</strong> Full-Stack Developer</li>
                        <li><strong>Responsibilities:</strong>
                            <ul>
                                <li>Designed and implemented the fuzzy searching functionality.</li>
                                <li>Integrated Trigram indexing for efficient fuzzy search operations.</li>
                                <li>Ensured the system uses debounce to prevent request throttling.</li>
                                <li>Implemented caching with SWR to avoid unnecessary subsequent requests.</li>
                            </ul>
                        </li>
                    </ul>
                    <h3>Technologies and Tools</h3>
                    <ul>
                        <li><strong>Stack:</strong> Laravel, React, PostgreSQL, Trigram, SWR</li>
                        <li><strong>Why These Tools:</strong>
                            <ul>
                                <li><strong>Laravel:</strong> Robust PHP framework for building the backend RESTful API.
                                </li>
                                <li><strong>React:</strong> Efficient front-end library for building a responsive user
                                    interface.
                                </li>
                                <li><strong>PostgreSQL:</strong> Advanced SQL database with support for Trigram
                                    indexing.
                                </li>
                                <li><strong>Trigram:</strong> Provides effective fuzzy searching capabilities.</li>
                                <li><strong>SWR:</strong> React hook library for caching and revalidating data fetching.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <h3>Project Features</h3>
                    <ul>
                        <li>Global Search: Allows users to perform comprehensive searches across multiple geographic
                            levels.
                        </li>
                        <li>Partial Search: Supports partial input matching to improve search flexibility.</li>
                        <li>Debounce Mechanism: Prevents request throttling by delaying input processing.</li>
                        <li>Result Caching: Utilizes SWR to cache search results, reducing unnecessary requests.</li>
                    </ul>
                    <h3>Challenges and Solutions</h3>
                    <ul>
                        <li><strong>Challenge:</strong> Implementing efficient fuzzy searching with high accuracy.
                            <ul>
                                <li><strong>Solution:</strong> Used Trigram indexing with a similarity threshold (e.g.,
                                    0.8 for 80% match) to control search result relevance.
                                </li>
                            </ul>
                        </li>
                        <li><strong>Challenge:</strong> Preventing request overload from rapid user input.
                            <ul>
                                <li><strong>Solution:</strong> Implemented debounce in the search input handling to
                                    limit the frequency of API calls.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <h3>Improvements and Bug Fixes</h3>
                    <ul>
                        <li><strong>Improvement:</strong> Enhanced search performance and accuracy by fine-tuning the
                            Trigram similarity threshold.
                        </li>
                        <li><strong>Bug Fix:</strong> Resolved issues with caching conflicts by properly configuring SWR
                            for optimal cache management.
                        </li>
                    </ul>
                    <h3>Impact and Results</h3>
                    <ul>
                        <li><strong>Metrics:</strong> Improved search accuracy and reduced server load due to effective
                            caching and debouncing.
                        </li>
                        <li><strong>Feedback:</strong> Positive user feedback on the search feature’s responsiveness and
                            accuracy.
                        </li>
                    </ul>
                    <h3>Reflections and Future Work</h3>
                    <ul>
                        <li><strong>Lessons Learned:</strong> Gained deeper insights into implementing efficient fuzzy
                            search algorithms and optimizing API performance with debouncing and caching.
                        </li>
                        <li><strong>Future Plans:</strong> Plan to enhance the search feature by integrating additional
                            filters and improving the search algorithm’s precision.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OapFuzzySearching;