import React from 'react';
import { useTranslation } from 'react-i18next';

const OapElectionPromotion = () => {
    const { t } = useTranslation();

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header bg-warning text-white">
                    <h2>{t('election.name')}</h2>
                </div>
                <div className="card-body">
                    <h3>{t('project_headers.overview')}</h3>
                    <p>{t('election.overview.description')}</p>

                    <h3>{t('project_headers.role_contributions.role')}</h3>
                    <ul>
                        <li>
                            <strong>{t('project_headers.role_contributions.role')}:</strong> {t('election.role_contributions.role')}
                        </li>
                        <li>
                            <strong>{t('project_headers.role_contributions.responsibilities')}:</strong>
                            <ul>
                                <li>{t('election.role_contributions.responsibilities.0')}</li>
                                <li>{t('election.role_contributions.responsibilities.1')}</li>
                                <li>{t('election.role_contributions.responsibilities.2')}</li>
                                <li>{t('election.role_contributions.responsibilities.3')}</li>
                            </ul>
                        </li>
                    </ul>

                    <h3>{t('project_headers.technologies_tools.stack')}</h3>
                    <ul>
                        <li>
                            <strong>{t('project_headers.technologies_tools.stack')}:</strong> {t('election.technologies_tools.stack')}
                        </li>
                        <li>
                            <strong>{t('project_headers.technologies_tools.why_these_tools')}:</strong>
                            <ul>
                                <li>
                                    {t('election.technologies_tools.why_these_tools.Laravel')}
                                </li>
                                <li>
                                    {t('election.technologies_tools.why_these_tools.React')}
                                </li>
                                <li>
                                    {t('election.technologies_tools.why_these_tools.PHPunit')}
                                </li>
                                <li>
                                   {t('election.technologies_tools.why_these_tools.Observer')}
                                </li>
                                <li>
                                    {t('election.technologies_tools.why_these_tools.Factory')}
                                </li>
                                <li>
                                    {t('election.technologies_tools.why_these_tools.DependencyInjection')}
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <h3>{t('project_headers.project_features')}</h3>
                    <ul>
                        <li>{t('election.project_features.user_information_gathering')}</li>
                        <li>{t('election.project_features.election_participation_encouragement')}</li>
                        <li>{t('election.project_features.voting_system')}</li>
                        <li>{t('election.project_features.promotion_outcome')}</li>
                        <li>{t('election.project_features.notification_system')}</li>
                        <li>{t('election.project_features.testing')}</li>
                    </ul>

                    <h3>{t('project_headers.challenges_solutions')}</h3>
                    <ul>
                        <li>
                            <strong>{t('project_headers.challenge')}:</strong> {t('election.challenges_solutions.0.challenge')}
                            <ul>
                                <li>
                                    <strong>{t('project_headers.solution')}:</strong> {t('election.challenges_solutions.0.solution')}
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>{t('project_headers.challenge')}:</strong> {t('election.challenges_solutions.1.challenge')}
                            <ul>
                                <li>
                                    <strong>{t('project_headers.solution')}:</strong> {t('election.challenges_solutions.1.solution')}
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <h3>{t('project_headers.improvements_bug_fixes.improvement')}</h3>
                    <ul>
                        <li>
                            <strong>{t('project_headers.improvements_bug_fixes.improvement')}:</strong> {t('election.improvements_bug_fixes.0.improvement')}
                        </li>
                        <li>
                            <strong>{t('project_headers.improvements_bug_fixes.bug_fix')}:</strong> {t('election.improvements_bug_fixes.1.bug_fix')}
                        </li>
                    </ul>

                    <h3>{t('project_headers.impact_results.impact_results')}</h3>
                    <ul>
                        <li>
                            <strong>{t('project_headers.impact_results.metrics')}:</strong> {t('election.impact_results.metrics')}
                        </li>
                        <li>
                            <strong>{t('project_headers.impact_results.feedback')}:</strong> {t('election.impact_results.feedback')}
                        </li>
                    </ul>

                    <h3>{t('project_headers.reflections_future_work.lessons_learned')}</h3>
                    <ul>
                        <li>
                            <strong>{t('project_headers.reflections_future_work.lessons_learned')}:</strong> {t('election.reflections_future_work.lessons_learned')}
                        </li>
                        <li>
                            <strong>{t('project_headers.reflections_future_work.future_plans')}:</strong> {t('election.reflections_future_work.future_plans')}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OapElectionPromotion;