import React from 'react';
import { useTranslation } from 'react-i18next';

const EngineXCarRentalShop = () => {
    const { t } = useTranslation();

    return (
        <div className="container mt-2">
            <div className="card">
                <div className="card-header bg-dark text-white">
                    <h2>{t('enginex_car_rental.name')}</h2>
                </div>
                <div className="card-body">
                    <h3>{t('project_headers.overview')}</h3>
                    <p>{t('enginex_car_rental.overview.description')}</p>

                    <h3>{t('project_headers.role_contributions.role')}</h3>
                    <ul>
                        <li>
                            <strong>{t('project_headers.role_contributions.role')}:</strong> {t('enginex_car_rental.role_contributions.role')}
                        </li>
                        <li>
                            <strong>{t('project_headers.role_contributions.responsibilities')}:</strong>
                            <ul>
                                <li>{t('enginex_car_rental.role_contributions.responsibilities.0')}</li>
                                <li>{t('enginex_car_rental.role_contributions.responsibilities.1')}</li>
                                <li>{t('enginex_car_rental.role_contributions.responsibilities.2')}</li>
                            </ul>
                        </li>
                    </ul>

                    <h3>{t('project_headers.technologies_tools.stack')}</h3>
                    <ul>
                        <li>
                            <strong>{t('project_headers.technologies_tools.stack')}:</strong> {t('enginex_car_rental.technologies_tools.stack')}
                        </li>
                        <li>
                            <strong>{t('project_headers.technologies_tools.why_these_tools')}:</strong>
                            <ul>
                                <li>
                                    {t('enginex_car_rental.technologies_tools.why_these_tools.C# and .NET')}
                                </li>
                                <li>
                                    {t('enginex_car_rental.technologies_tools.why_these_tools.React')}
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <h3>{t('project_headers.project_features')}</h3>
                    <ul>
                        <li>{t('enginex_car_rental.project_features.user_friendly_interface')}</li>
                        <li>{t('enginex_car_rental.project_features.robust_backend')}</li>
                        <li>{t('enginex_car_rental.project_features.documentation_and_mockups')}</li>
                        <li>{t('enginex_car_rental.project_features.testing')}</li>
                    </ul>

                    <h3>{t('project_headers.challenges_solutions')}</h3>
                    <ul>
                        <li>
                            <strong>{t('project_headers.challenge')}:</strong> {t('enginex_car_rental.challenges_solutions.0.challenge')}
                            <ul>
                                <li>
                                    <strong>{t('project_headers.solution')}:</strong> {t('enginex_car_rental.challenges_solutions.0.solution')}
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>{t('project_headers.challenge')}:</strong> {t('enginex_car_rental.challenges_solutions.1.challenge')}
                            <ul>
                                <li>
                                    <strong>{t('project_headers.solution')}:</strong> {t('enginex_car_rental.challenges_solutions.1.solution')}
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <h3>{t('project_headers.improvements_bug_fixes.improvement')}</h3>
                    <ul>
                        <li>
                            <strong>{t('project_headers.improvements_bug_fixes.improvement')}:</strong> {t('enginex_car_rental.improvements_bug_fixes.0.improvement')}
                        </li>
                        <li>
                            <strong>{t('project_headers.improvements_bug_fixes.bug_fix')}:</strong> {t('enginex_car_rental.improvements_bug_fixes.1.bug_fix')}
                        </li>
                    </ul>

                    <h3>{t('project_headers.impact_results.impact_results')}</h3>
                    <ul>
                        <li>
                            <strong>{t('project_headers.impact_results.metrics')}:</strong> {t('enginex_car_rental.impact_results.metrics')}
                        </li>
                        <li>
                            <strong>{t('project_headers.impact_results.feedback')}:</strong> {t('enginex_car_rental.impact_results.feedback')}
                        </li>
                    </ul>

                    <h3>{t('project_headers.reflections_future_work.lessons_learned')}</h3>
                    <ul>
                        <li>
                            <strong>{t('project_headers.reflections_future_work.lessons_learned')}:</strong> {t('enginex_car_rental.reflections_future_work.lessons_learned')}
                        </li>
                        <li>
                            <strong>{t('project_headers.reflections_future_work.future_plans')}:</strong> {t('enginex_car_rental.reflections_future_work.future_plans')}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EngineXCarRentalShop;