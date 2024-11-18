import React from 'react';
import { useTranslation } from 'react-i18next';

const CleantopiaExcelConverter = () => {
    const { t } = useTranslation();

    return (
        <div className="container mt-2">
            <div className="card">
                <div className="card-header bg-info text-white">
                    <h2>{t('cleantopia.name')}</h2>
                </div>
                <div className="card-body">
                    <h3>{t('project_headers.overview')}</h3>
                    <p>{t('cleantopia.overview.description')}</p>
                    <h3>{t('project_headers.role_contributions.role')}</h3>
                    <ul>
                        <li><strong>{t('project_headers.role_contributions.role')}:</strong> {t('cleantopia.role_contributions.role')}</li>
                        <li><strong>{t('project_headers.role_contributions.responsibilities')}:</strong>
                            <ul>
                                {t('cleantopia.role_contributions.responsibilities', { returnObjects: true }).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                    <h3>{t('project_headers.technologies_tools.stack')}</h3>
                    <ul>
                        <li>
                            <strong>{t('project_headers.technologies_tools.stack')}:</strong> {t('cleantopia.technologies_tools.stack')}
                        </li>
                        <li><strong>{t('project_headers.technologies_tools.why_these_tools')}:</strong>
                            <ul>
                                <li>{t('cleantopia.technologies_tools.why_these_tools.C#')}</li>
                                <li>{t('cleantopia.technologies_tools.why_these_tools.Winforms')}</li>
                            </ul>
                        </li>
                    </ul>
                    <h3>{t('project_headers.project_features')}</h3>
                    <ul>
                        <li>{t('cleantopia.project_features.label_generation')}</li>
                        <li>{t('cleantopia.project_features.user_friendly_interface')}</li>
                        <li>{t('cleantopia.project_features.data_filtering')}</li>
                        <li>{t('cleantopia.project_features.preview_and_print')}</li>
                    </ul>
                    <h3>{t('project_headers.challenges_solutions')}</h3>
                    <ul>
                        {t('cleantopia.challenges_solutions', { returnObjects: true }).map((challenge, index) => (
                            <li key={index}>
                                <strong>{t('project_headers.challenge')}:</strong> {challenge.challenge}
                                <ul>
                                    <li><strong>{t('project_headers.solution')}:</strong> {challenge.solution}</li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                    <h3>{t('project_headers.impact_results.impact_results')}</h3>
                    <ul>
                        <li><strong>{t('project_headers.impact_results.metrics')}:</strong> {t('cleantopia.impact_results.metrics')}</li>
                        <li><strong>{t('project_headers.impact_results.feedback')}:</strong> {t('cleantopia.impact_results.feedback')}</li>
                    </ul>
                    <h3>{t('project_headers.reflections_future_work.lessons_learned')}</h3>
                    <ul>
                        <li><strong>{t('project_headers.reflections_future_work.lessons_learned')}:</strong> {t('cleantopia.reflections_future_work.lessons_learned')}</li>
                        <li><strong>{t('project_headers.reflections_future_work.future_plans')}:</strong> {t('cleantopia.reflections_future_work.future_plans')}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CleantopiaExcelConverter;