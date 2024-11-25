import React from 'react';
import { useTranslation } from 'react-i18next';

const OapFacebookIntegration = () => {
    const { t } = useTranslation();
    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header bg-primary text-white">
                    <h2>{t('oAuth.name')}</h2>
                </div>
                <div className="card-body">
                    <h3>{t('project_headers.overview')}</h3>
                    <p>{t('oAuth.overview.description')}</p>

                    <h3>{t('project_headers.role_contributions.role')}</h3>
                    <ul>
                        <li><strong>{t('project_headers.role_contributions.role')}:</strong> {t('oAuth.role_contributions.role')}</li>
                        <li><strong>{t('project_headers.role_contributions.responsibilities')}:</strong>
                            <ul>
                                <li>{t('oAuth.role_contributions.responsibilities.0')}</li>
                                <li>{t('oAuth.role_contributions.responsibilities.1')}</li>
                                <li>{t('oAuth.role_contributions.responsibilities.2')}</li>
                                <li>{t('oAuth.role_contributions.responsibilities.3')}</li>
                            </ul>
                        </li>
                    </ul>

                    <h3>{t('project_headers.technologies_tools.stack')}</h3>
                    <ul>
                        <li><strong>{t('project_headers.technologies_tools.stack')}:</strong> {t('oAuth.technologies_tools.stack')}</li>
                        <li><strong>{t('project_headers.technologies_tools.why_these_tools')}:</strong>
                            <ul>
                                <li><strong>Laravel:</strong> {t('oAuth.technologies_tools.why_these_tools.Laravel')}</li>
                                <li><strong>React:</strong> {t('oAuth.technologies_tools.why_these_tools.React')}</li>
                                <li><strong>Facebook SDK:</strong> {t('oAuth.technologies_tools.why_these_tools.Facebook SDK')}</li>
                                <li><strong>OAuth 2.0:</strong> {t('oAuth.technologies_tools.why_these_tools.OAuth 2.0')}</li>
                            </ul>
                        </li>
                    </ul>

                    <h3>{t('project_headers.project_features')}</h3>
                    <ul>
                        <li>{t('oAuth.project_features.oauth_authentication')}</li>
                        <li>{t('oAuth.project_features.user_data_access')}</li>
                        <li>{t('oAuth.project_features.token_handling')}</li>
                        <li>{t('oAuth.project_features.error_handling')}</li>
                    </ul>

                    <h3>{t('project_headers.challenges_solutions')}</h3>
                    <ul>
                        <li><strong>{t('project_headers.challenge')}:</strong> {t('oAuth.challenges_solutions.0.challenge')}
                            <ul>
                                <li><strong>{t('project_headers.solution')}:</strong> {t('oAuth.challenges_solutions.0.solution')}</li>
                            </ul>
                        </li>
                    </ul>

                    <h3>{t('project_headers.impact_results.impact_results')}</h3>
                    <ul>
                        <li><strong>{t('project_headers.impact_results.metrics')}:</strong> {t('oAuth.impact_results.metrics')}</li>
                        <li><strong>{t('project_headers.impact_results.feedback')}:</strong> {t('oAuth.impact_results.feedback')}</li>
                    </ul>

                    <h3>{t('project_headers.reflections_future_work.lessons_learned')}</h3>
                    <ul>
                        <li><strong>{t('project_headers.reflections_future_work.lessons_learned')}:</strong> {t('oAuth.reflections_future_work.lessons_learned')}</li>
                        <li><strong>{t('project_headers.reflections_future_work.future_plans')}:</strong> {t('oAuth.reflections_future_work.future_plans')}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OapFacebookIntegration;