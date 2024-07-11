import React from 'react';

const OapElectionPromotion = () => {
    return (
        <div className="container mt-2">
            <div className="card">
                <div className="card-header bg-warning text-white">
                    <h2>Election Promotion Feature</h2>
                </div>
                <div className="card-body">
                    <div className="row mb-2">
                        <img src="./assets/static/demo/election-demo.png"/>
                    </div>
                    <h3>Overview<span className="mx-1 h5"><a href="https://ominous.app/election" target="_blank"><i
                        className="fa-solid fa-link"></i></a></span></h3>
                    <p>The Election feature facilitates user promotions through a community voting system. It replaces
                        the previous manual promotion process by admins, encouraging user participation and
                        engagement.</p>
                    <h3>Role and Contributions</h3>
                    <ul>
                        <li><strong>Role:</strong> Full-Stack Developer</li>
                        <li><strong>Responsibilities:</strong>
                            <ul>
                                <li>Designed and implemented the election feature for user promotions.</li>
                                <li>Integrated user data gathering and voting mechanisms.</li>
                                <li>Implemented notification systems using the Observer design pattern.</li>
                                <li>Conducted thorough testing using the Factory design pattern and dependency
                                    injection.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <h3>Technologies and Tools</h3>
                    <ul>
                        <li><strong>Stack:</strong> Laravel, React, PHPunit, Observer Design Pattern, Factory Design
                            Pattern, Dependency Injection
                        </li>
                        <li><strong>Why These Tools:</strong>
                            <ul>
                                <li><strong>Laravel:</strong> Provides a robust backend framework for handling business
                                    logic and database operations.
                                </li>
                                <li><strong>React:</strong> Ensures a dynamic and responsive front-end experience.</li>
                                <li><strong>PHPunit:</strong> Essential for automated testing to ensure code quality and
                                    reliability.
                                </li>
                                <li><strong>Observer Design Pattern:</strong> Facilitates notification systems for
                                    election events.
                                </li>
                                <li><strong>Factory Design Pattern:</strong> Simplifies object creation in tests for
                                    more maintainable code.
                                </li>
                                <li><strong>Dependency Injection:</strong> Enhances testability and flexibility of the
                                    codebase.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <h3>Project Features</h3>
                    <ul>
                        <li>User Information Gathering: Collects data on user activity, such as the number of albums,
                            photos uploaded, and comments left.
                        </li>
                        <li>Election Participation Encouragement: Promotes user engagement by encouraging participation
                            in the election process.
                        </li>
                        <li>Voting System: Allows users to upvote or downvote candidates.</li>
                        <li>Promotion Outcome: Determines user promotion or failure based on election results after a
                            week.
                        </li>
                        <li>Notification System: Sends notifications via database (internal notification), email, and
                            Discord channel at various stages of the election process.
                        </li>
                        <li>Testing: Conducted unit, integration, and controller testing using PHPunit, leveraging the
                            Factory design pattern and dependency injection for mocking dependencies.
                        </li>
                    </ul>
                    <h3>Challenges and Solutions</h3>
                    <ul>
                        <li><strong>Challenge:</strong> Ensuring fair and unbiased election results.
                            <ul>
                                <li><strong>Solution:</strong> Implemented robust voting logic and validation to prevent
                                    manipulation.
                                </li>
                            </ul>
                        </li>
                        <li><strong>Challenge:</strong> Managing real-time notifications across multiple channels.
                            <ul>
                                <li><strong>Solution:</strong> Used the Observer design pattern to efficiently handle
                                    notifications and ensure timely updates.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <h3>Improvements and Bug Fixes</h3>
                    <ul>
                        <li><strong>Improvement:</strong> Enhanced user experience by providing clear and timely
                            notifications about election statuses.
                        </li>
                        <li><strong>Bug Fix:</strong> Fixed issues with vote counting and ensured accurate tallying of
                            upvotes and downvotes.
                        </li>
                    </ul>
                    <h3>Impact and Results</h3>
                    <ul>
                        <li><strong>Metrics:</strong> Increased user engagement and participation in the promotion
                            process.
                        </li>
                        <li><strong>Feedback:</strong> Positive feedback from users appreciating the transparent and
                            community-driven promotion system.
                        </li>
                    </ul>
                    <h3>Reflections and Future Work</h3>
                    <ul>
                        <li><strong>Lessons Learned:</strong> Gained valuable experience in implementing
                            community-driven features and ensuring robust notification systems.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OapElectionPromotion;