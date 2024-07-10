import React from 'react';

const OAPAdvancedMap = () => {
    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header bg-success text-white">
                    <h2>Advanced Map Feature</h2>
                </div>
                <div className="card-body">
                    <div className="row mb-2">
                        <img src="./assets/static/demo/advanced-map-demo.gif" alt="advanced map demo in OAP with admin account"/>
                    </div>
                    <h3>Overview</h3>
                    <p>The Map feature is a Single Page Application (SPA) that allows users to interact with geographic
                        data. It provides authenticated access, location filtering, and user-tier specific
                        functionalities using Laravel, React, and other modern technologies.</p>
                    <h3>Role and Contributions</h3>
                    <ul>
                        <li><strong>Role:</strong> Full-Stack Developer</li>
                        <li><strong>Responsibilities:</strong>
                            <ul>
                                <li>Implemented map functionality using Leaflet.</li>
                                <li>Managed authentication with Laravel Sanctum.</li>
                                <li>Set up efficient data fetching and caching with SWR.</li>
                                <li>Developed custom error messages for restricted features.</li>
                            </ul>
                        </li>
                    </ul>
                    <h3>Technologies and Tools</h3>
                    <ul>
                        <li><strong>Stack:</strong> Laravel, React, Laravel Sanctum, SWR, PostgreSQL, Leaflet</li>
                        <li><strong>Why These Tools:</strong>
                            <ul>
                                <li><strong>Laravel:</strong> Provides a powerful backend framework for RESTful API
                                    development.
                                </li>
                                <li><strong>React:</strong> Ensures a dynamic and responsive front-end experience.</li>
                                <li><strong>Laravel Sanctum:</strong> Simplifies API token authentication.</li>
                                <li><strong>SWR:</strong> Efficiently caches and manages data fetching.</li>
                                <li><strong>PostgreSQL:</strong> Advanced database capabilities for geographic data.
                                </li>
                                <li><strong>Leaflet:</strong> Robust library for interactive maps.</li>
                            </ul>
                        </li>
                    </ul>
                    <h3>Project Features</h3>
                    <ul>
                        <li>Map Integration: Interactive map using Leaflet for displaying and interacting with
                            locations.
                        </li>
                        <li>Bounding Box Query: Front-end sends bounding box coordinates to the backend, which queries
                            locations within these bounds.
                        </li>
                        <li>Authentication: Managed with Laravel Sanctum to protect routes and data.</li>
                        <li>User-Tier Access: Premium users have access to additional features, with custom HTML error
                            messages for restricted access (e.g., 403 Forbidden).
                        </li>
                        <li>Location Filtering: Locations can be filtered by status, level, hazard, and category.</li>
                        <li>Data Loading: Eager loading for basic location info (name, lat, lng, level) and lazy loading
                            for detailed info (albums, comments).
                        </li>
                        <li>Debounce and Throttle: Implemented to manage user inputs and control request rates.</li>
                        <li>Caching: SWR caches locations to avoid redundant requests.</li>
                        <li>Extra Features: Users can navigate to specific coordinates and find their current
                            location.
                        </li>
                    </ul>
                    <h3>Challenges and Solutions</h3>
                    <ul>
                        <li><strong>Challenge:</strong> Efficiently handling large datasets and frequent user
                            interactions.
                            <ul>
                                <li><strong>Solution:</strong> Implemented debounce and throttle mechanisms to control
                                    the rate of requests and interactions.
                                </li>
                            </ul>
                        </li>
                        <li><strong>Challenge:</strong> Restricting access to premium features.
                            <ul>
                                <li><strong>Solution:</strong> Developed custom HTML error messages and used Laravel's
                                    middleware for access control.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <h3>Improvements and Bug Fixes</h3>
                    <ul>
                        <li><strong>Improvement:</strong> Optimized database queries with bounding box logic to enhance
                            performance.
                        </li>
                        <li><strong>Bug Fix:</strong> Resolved issues with inconsistent data fetching by properly
                            configuring SWR and handling edge cases in the map component.
                        </li>
                    </ul>
                    <h3>Impact and Results</h3>
                    <ul>
                        <li><strong>Metrics:</strong> Improved user engagement and performance due to efficient data
                            handling and caching.
                        </li>
                        <li><strong>Feedback:</strong> Positive feedback on the map’s responsiveness and the seamless
                            access control for premium features.
                        </li>
                    </ul>
                    <h3>Reflections and Future Work</h3>
                    <ul>
                        <li><strong>Lessons Learned:</strong> Enhanced skills in managing large datasets and
                            implementing efficient data fetching strategies.
                        </li>
                        <li><strong>Future Plans:</strong> Plan to add more interactive map features, such as heatmaps
                            and route planning.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OAPAdvancedMap;