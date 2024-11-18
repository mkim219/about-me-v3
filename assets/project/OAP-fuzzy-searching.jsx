import React from 'react';
import { useTranslation } from 'react-i18next';

const OapFuzzySearching = () => {
    const { t } = useTranslation();

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header bg-secondary text-white">
                    <h2>{t('project_detail.fuzzy_searching.name')}</h2>
                </div>
                <div className="card-body">
                    <div className="row mb-2">
                        <img
                            src="./assets/static/demo/fuzzy-searching-demo.gif"
                            alt={t('project_detail.fuzzy_searching.overview.demo')}
                        />
                    </div>
                    <h3>
                        {t('project_headers.overview')}
                        <span className="mx-1 h5">
                            <a href="https://ominous.app/" target="_blank" rel="noreferrer">
                                <i className="fa-solid fa-link"></i>
                            </a>
                        </span>
                    </h3>
                    <p>{t('project_detail.fuzzy_searching.overview.description')}</p>
                    <h3>{t('project_headers.role_contributions.role')}</h3>
                    <ul>
                        <li><strong>{t('project_headers.role_contributions.role')}:</strong> {t('project_detail.fuzzy_searching.role_contributions.role')}</li>
                        <li>
                            <strong>{t('project_headers.role_contributions.responsibilities')}:</strong>
                            <ul>
                                <li>{t('project_detail.fuzzy_searching.role_contributions.responsibilities.0')}</li>
                                <li>{t('project_detail.fuzzy_searching.role_contributions.responsibilities.1')}</li>
                                <li>{t('project_detail.fuzzy_searching.role_contributions.responsibilities.2')}</li>
                                <li>{t('project_detail.fuzzy_searching.role_contributions.responsibilities.3')}</li>
                            </ul>
                        </li>
                    </ul>
                    <h3>{t('project_headers.technologies_tools.stack')}</h3>
                    <ul>
                        <li><strong>{t('project_headers.technologies_tools.stack')}:</strong> Laravel, React, PostgreSQL, Trigram, SWR</li>
                        <li>
                            <strong>{t('project_headers.technologies_tools.why_these_tools')}:</strong>
                            <ul>
                                <li><strong>Laravel:</strong> {t('project_detail.fuzzy_searching.technologies_tools.why_these_tools.Laravel')}</li>
                                <li><strong>React:</strong> {t('project_detail.fuzzy_searching.technologies_tools.why_these_tools.React')}</li>
                                <li><strong>PostgreSQL:</strong> {t('project_detail.fuzzy_searching.technologies_tools.why_these_tools.PostgreSQL')}</li>
                                <li><strong>Trigram:</strong> {t('project_detail.fuzzy_searching.technologies_tools.why_these_tools.Trigram')}</li>
                                <li><strong>SWR:</strong> {t('project_detail.fuzzy_searching.technologies_tools.why_these_tools.SWR')}</li>
                            </ul>
                        </li>
                    </ul>
                    <h3>{t('project_headers.project_features')}</h3>
                    <ul>
                        <li>{t('project_detail.fuzzy_searching.project_features.global_search')}</li>
                        <li>{t('project_detail.fuzzy_searching.project_features.partial_search')}</li>
                        <li>{t('project_detail.fuzzy_searching.project_features.debounce_mechanism')}</li>
                        <li>{t('project_detail.fuzzy_searching.project_features.result_caching')}</li>
                    </ul>
                    <h3>{t('project_headers.challenges_solutions')}</h3>
                    <ul>
                        <li>
                            <strong>{t('project_headers.challenge')}:</strong> {t('project_detail.fuzzy_searching.challenges_solutions.0.challenge')}
                            <ul>
                                <li><strong>{t('project_headers.solution')}:</strong> {t('project_detail.fuzzy_searching.challenges_solutions.0.solution')}</li>
                            </ul>
                        </li>
                        <li>
                            <strong>{t('project_headers.challenge')}:</strong> {t('project_detail.fuzzy_searching.challenges_solutions.1.challenge')}
                            <ul>
                                <li><strong>{t('project_headers.solution')}:</strong> {t('project_detail.fuzzy_searching.challenges_solutions.1.solution')}</li>
                            </ul>
                        </li>
                    </ul>
                    <h3>{t('project_headers.improvements_bug_fixes.improvement')}</h3>
                    <ul>
                        <li><strong>{t('project_headers.improvements_bug_fixes.improvement')}:</strong> {t('project_detail.fuzzy_searching.improvements_bug_fixes.0.improvement')}</li>
                        <li><strong>{t('project_headers.improvements_bug_fixes.bug_fix')}:</strong> {t('project_detail.fuzzy_searching.improvements_bug_fixes.1.bug_fix')}</li>
                    </ul>
                    <h3>{t('project_headers.impact_results.impact_results')}</h3>
                    <ul>
                        <li><strong>{t('project_headers.impact_results.metrics')}:</strong> {t('project_detail.fuzzy_searching.impact_results.metrics')}</li>
                        <li><strong>{t('project_headers.impact_results.feedback')}:</strong> {t('project_detail.fuzzy_searching.impact_results.feedback')}</li>
                    </ul>
                    <h3>{t('project_headers.reflections_future_work.lessons_learned')}</h3>
                    <ul>
                        <li><strong>{t('project_headers.reflections_future_work.lessons_learned')}:</strong> {t('project_detail.fuzzy_searching.reflections_future_work.lessons_learned')}</li>
                        <li><strong>{t('project_headers.reflections_future_work.future_plans')}:</strong> {t('project_detail.fuzzy_searching.reflections_future_work.future_plans')}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OapFuzzySearching;