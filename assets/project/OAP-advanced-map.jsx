import React from 'react';
import { useTranslation } from 'react-i18next';

const OAPAdvancedMap = () => {
    const { t } = useTranslation();

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header bg-success text-white">
                    <h2>{t('project_detail.advanced_map.name')}</h2>
                </div>
                <div className="card-body">
                    <div className="row mb-2">
                        <img
                            src="./assets/static/demo/advanced-map-demo.gif"
                            alt={t('project_detail.advanced_map.overview.demo')}
                        />
                    </div>
                    <h3>{t('project_headers.overview')}</h3>
                    <p>{t('project_detail.advanced_map.overview.description')}</p>

                    <h3>{t('project_headers.role_contributions.role')}</h3>
                    <ul>
                        <li>
                            <strong>{t('project_headers.role_contributions.role')}:</strong> {t('project_detail.advanced_map.role_contributions.role')}
                        </li>
                        <li>
                            <strong>{t('project_headers.role_contributions.responsibilities')}:</strong>
                            <ul>
                                <li>{t('project_detail.advanced_map.role_contributions.responsibilities.0')}</li>
                                <li>{t('project_detail.advanced_map.role_contributions.responsibilities.1')}</li>
                                <li>{t('project_detail.advanced_map.role_contributions.responsibilities.2')}</li>
                                <li>{t('project_detail.advanced_map.role_contributions.responsibilities.3')}</li>
                            </ul>
                        </li>
                    </ul>

                    <h3>{t('project_headers.technologies_tools.stack')}</h3>
                    <ul>
                        <li>
                            <strong>{t('project_headers.technologies_tools.stack')}:</strong> {t('project_detail.advanced_map.technologies_tools.stack')}
                        </li>
                        <li>
                            <strong>{t('project_headers.technologies_tools.why_these_tools')}:</strong>
                            <ul>
                                <li><strong>Laravel:</strong> {t('project_detail.advanced_map.technologies_tools.why_these_tools.Laravel')}</li>
                                <li><strong>React:</strong> {t('project_detail.advanced_map.technologies_tools.why_these_tools.React')}</li>
                                <li><strong>Laravel Sanctum:</strong> {t('project_detail.advanced_map.technologies_tools.why_these_tools.Laravel_sanctum')}</li>
                                <li><strong>SWR:</strong> {t('project_detail.advanced_map.technologies_tools.why_these_tools.SWR')}</li>
                                <li><strong>PostgreSQL:</strong> {t('project_detail.advanced_map.technologies_tools.why_these_tools.PostgreSQL')}</li>
                                <li><strong>Leaflet:</strong> {t('project_detail.advanced_map.technologies_tools.why_these_tools.Leaflet')}</li>
                            </ul>
                        </li>
                    </ul>

                    <h3>{t('project_headers.project_features')}</h3>
                    <ul>
                        <li>{t('project_detail.advanced_map.project_features.map_integration')}</li>
                        <li>{t('project_detail.advanced_map.project_features.bounding_box_query')}</li>
                        <li>{t('project_detail.advanced_map.project_features.authentication')}</li>
                        <li>{t('project_detail.advanced_map.project_features.user_tier_access')}</li>
                        <li>{t('project_detail.advanced_map.project_features.location_filtering')}</li>
                        <li>{t('project_detail.advanced_map.project_features.data_loading')}</li>
                        <li>{t('project_detail.advanced_map.project_features.debounce_and_throttle')}</li>
                        <li>{t('project_detail.advanced_map.project_features.caching')}</li>
                        <li>{t('project_detail.advanced_map.project_features.extra_features')}</li>
                    </ul>

                    <h3>{t('project_headers.challenges_solutions')}</h3>
                    <ul>
                        <li>
                            <strong>{t('project_headers.challenge')}:</strong> {t('project_detail.advanced_map.challenges_solutions.0.challenge')}
                            <ul>
                                <li><strong>{t('project_headers.solution')}:</strong> {t('project_detail.advanced_map.challenges_solutions.0.solution')}</li>
                            </ul>
                        </li>
                        <li>
                            <strong>{t('project_headers.challenge')}:</strong> {t('project_detail.advanced_map.challenges_solutions.1.challenge')}
                            <ul>
                                <li><strong>{t('project_headers.solution')}:</strong> {t('project_detail.advanced_map.challenges_solutions.1.solution')}</li>
                            </ul>
                        </li>
                    </ul>

                    <h3>{t('project_headers.improvements_bug_fixes.improvement')}</h3>
                    <ul>
                        <li><strong>{t('project_headers.improvements_bug_fixes.improvement')}:</strong> {t('project_detail.advanced_map.improvements_bug_fixes.0.improvement')}</li>
                        <li><strong>{t('project_headers.improvements_bug_fixes.bug_fix')}:</strong> {t('project_detail.advanced_map.improvements_bug_fixes.1.bug_fix')}</li>
                    </ul>

                    <h3>{t('project_headers.impact_results.impact_results')}</h3>
                    <ul>
                        <li><strong>{t('project_headers.impact_results.metrics')}:</strong> {t('project_detail.advanced_map.impact_results.metrics')}</li>
                        <li><strong>{t('project_headers.impact_results.feedback')}:</strong> {t('project_detail.advanced_map.impact_results.feedback')}</li>
                    </ul>

                    <h3>{t('project_headers.reflections_future_work.lessons_learned')}</h3>
                    <ul>
                        <li><strong>{t('project_headers.reflections_future_work.lessons_learned')}:</strong> {t('project_detail.advanced_map.reflections_future_work.lessons_learned')}</li>
                        <li><strong>{t('project_headers.reflections_future_work.future_plans')}:</strong> {t('project_detail.advanced_map.reflections_future_work.future_plans')}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OAPAdvancedMap;