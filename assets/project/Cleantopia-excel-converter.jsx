import React from 'react';

const CleantopiaExcelConverter = () => {
    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header bg-info text-white">
                    <h2>Cleantopia Excel Converter</h2>
                </div>
                <div className="card-body">
                    <h3>Overview<span className="mx-1 h5"><a
                        href="https://github.com/mkim219/Cleantopia-excel-convert-GUI" target="_blank"><i
                        className="fa-brands fa-github"></i></a></span></h3>
                    <p>The Cleantopia Excel Converter is a desktop application designed to assist Cleantopia in
                        generating labels for customer clothes. This application simplifies the process of extracting
                        necessary customer information from CSV files and converting it into a format suitable for label
                        printing. The primary goal is to prevent mishandling of clothes by providing clear and easily
                        identifiable labels.</p>
                    <h3>Role and Contributions</h3>
                    <ul>
                        <li><strong>Role:</strong> Developer</li>
                        <li><strong>Responsibilities:</strong>
                            <ul>
                                <li>Designed and implemented the GUI using C# Winforms.</li>
                                <li>Created functionality to parse CSV files and filter out unnecessary data.</li>
                                <li>Developed a user-friendly interface suitable for non-technical end users.</li>
                            </ul>
                        </li>
                    </ul>
                    <h3>Technologies and Tools</h3>
                    <ul>
                        <li><strong>Stack:</strong> C#, Winforms</li>
                        <li><strong>Why These Tools:</strong>
                            <ul>
                                <li><strong>C#:</strong> Provides robust support for desktop application development.
                                </li>
                                <li><strong>Winforms:</strong> Simplifies the creation of graphical user interfaces in a
                                    Windows environment.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <h3>Project Features</h3>
                    <ul>
                        <li>Label Generation: Converts customer information from CSV files into labels with unique
                            identifiers.
                        </li>
                        <li>User-Friendly Interface: Designed with non-technical users in mind, providing an intuitive
                            and straightforward GUI.
                        </li>
                        <li>Data Filtering: Automatically filters out unnecessary data from the CSV files, focusing on
                            essential information like customer name and unique identifier.
                        </li>
                        <li>Preview and Print: Allows users to preview labels before printing and directly print them
                            from the application.
                        </li>
                    </ul>
                    <h3>Challenges and Solutions</h3>
                    <ul>
                        <li><strong>Challenge:</strong> Ensuring the application is easy to use for non-technical staff.
                            <ul>
                                <li><strong>Solution:</strong> Implemented an intuitive drag-and-drop interface for
                                    loading CSV files and simple buttons for processing and printing labels.
                                </li>
                            </ul>
                        </li>
                        <li><strong>Challenge:</strong> Filtering out unnecessary data from the CSV files.
                            <ul>
                                <li><strong>Solution:</strong> Developed a parsing algorithm that extracts only the
                                    required fields (e.g., customer name, unique identifier) and ignores extraneous
                                    information.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <h3>Improvements and Bug Fixes</h3>
                    <ul>
                        <li><strong>Improvement:</strong> Enhanced the data parsing algorithm to handle various CSV
                            formats and edge cases.
                        </li>
                        <li><strong>Bug Fix:</strong> Resolved issues with the label preview not displaying correctly by
                            adjusting the rendering logic.
                        </li>
                    </ul>
                    <h3>Impact and Results</h3>
                    <ul>
                        <li><strong>Metrics:</strong> Reduced the incidence of misidentified clothes by providing clear
                            and consistent labeling.
                        </li>
                        <li><strong>Feedback:</strong> Positive feedback from staff on the ease of use and reliability
                            of the application.
                        </li>
                    </ul>
                    <h3>Reflections and Future Work</h3>
                    <ul>
                        <li><strong>Lessons Learned:</strong> Gained insights into developing user-friendly desktop
                            applications for non-technical users.
                        </li>
                        <li><strong>Future Plans:</strong> Plan to add features like batch processing, more
                            customization options for labels, and integration with label printers.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CleantopiaExcelConverter;