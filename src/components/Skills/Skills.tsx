
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  SiJira,
  SiPostman,
  SiMysql,
  SiPython,
  SiSelenium,
  SiCypress,
} from 'react-icons/si'

import {
  FaRobot,
  FaGlobe,
  FaMobileAlt,
  FaCheck,
  FaFileExcel,
  FaCode,
} from 'react-icons/fa'

import type { IconType } from 'react-icons'

import './Skills.css'

import {
  tools,
  learningSkills,
  type Language,
  type LocalizedText,
} from '../../data/skills'

// ========================================
// ICONOS
// ========================================

const toolIcons: Record<string, IconType> = {
  jira: SiJira,
  postman: SiPostman,
  mysql: SiMysql,
  excel: FaFileExcel,
  rocketbot: FaRobot,
  python: SiPython,
}

const learningIcons: Record<string, IconType> = {
  selenium: SiSelenium,
  playwright: FaCode,
  cypress: SiCypress,
  'katalon-web': FaGlobe,
  'katalon-mobile': FaMobileAlt,
}

// ========================================
// CLAVES DE TRADUCCIÓN
// ========================================

const methodologyKeys = [
  'scrum',
  'userStories',
  'acceptanceCriteria',
  'defectManagement',
  'impactAnalysis',
]

const testingTypeKeys = [
  'functional',
  'regression',
  'smoke',
  'endToEnd',
  'blackBox',
  'mobile',
]

// ========================================
// COMPONENTE DE DETALLE
// ========================================

interface ToolDetailProps {
  name: string
  description: LocalizedText
  details: LocalizedText[]
  Icon: IconType
  language: Language
}

function ToolDetail({
  name,
  description,
  details,
  Icon,
  language,
}: ToolDetailProps) {
  const { t } = useTranslation()

  return (
    <article className="skills__tool-detail">
      <div className="skills__tool-detail-heading">
        <Icon
          className="skills__tool-detail-icon"
          aria-hidden="true"
        />

        <div>
          <span className="skills__tool-detail-label">
            {t('skills.professionalUse')}
          </span>

          <h4>{name}</h4>
        </div>
      </div>

      <p className="skills__tool-detail-description">
        {description[language]}
      </p>

      <ul className="skills__tool-detail-list">
        {details.map((detail, index) => (
          <li key={index}>
            <FaCheck aria-hidden="true" />

            <span>
              {detail[language]}
            </span>
          </li>
        ))}
      </ul>
    </article>
  )
}

// ========================================
// COMPONENTE PRINCIPAL
// ========================================

function Skills() {
  const { t, i18n } = useTranslation()

  const language: Language =
    i18n.resolvedLanguage === 'en'
      ? 'en'
      : 'es'

  const [selectedTool, setSelectedTool] =
    useState<string | null>(null)

  const selectedToolData = tools.find(
    (tool) => tool.id === selectedTool,
  )

  const SelectedToolIcon = selectedToolData
    ? toolIcons[selectedToolData.id]
    : null

  function handleToolClick(toolId: string) {
    setSelectedTool((currentTool) =>
      currentTool === toolId
        ? null
        : toolId,
    )
  }

  return (
    <section
      className="skills"
      id="habilidades"
    >
      {/* ENCABEZADO */}

      <div className="skills__heading">
        <span className="skills__eyebrow">
          {t('skills.eyebrow')}
        </span>

        <h2 className="skills__title">
          {t('skills.title')}
        </h2>

        <p className="skills__description">
          {t('skills.description')}
        </p>

        <div
          className="skills__line"
          aria-hidden="true"
        />
      </div>

      <div className="skills__container">
        {/* HERRAMIENTAS */}

        <div className="skills__section">
          <div className="skills__section-heading">
            <h3>
              {t('skills.toolsTitle')}
            </h3>
          </div>

          <div
            className={`skills__tool-area ${
              selectedTool
                ? 'skills__tool-area--open'
                : ''
            }`}
          >
            <div className="skills__tool-grid">
              {tools.map((tool) => {
                const Icon = toolIcons[tool.id]

                const isSelected =
                  selectedTool === tool.id

                if (!Icon) {
                  return null
                }

                return (
                  <div
                    className={`skills__tool-wrapper ${
                      isSelected
                        ? 'skills__tool-wrapper--active'
                        : ''
                    }`}
                    key={tool.id}
                  >
                    <button
                      className={`skills__tool ${
                        isSelected
                          ? 'skills__tool--active'
                          : ''
                      }`}
                      type="button"
                      onClick={() =>
                        handleToolClick(tool.id)
                      }
                      aria-expanded={isSelected}
                      aria-controls={`desktop-tool-${tool.id}`}
                    >
                      <Icon
                        className="skills__tool-icon"
                        aria-hidden="true"
                      />

                      <span className="skills__tool-name">
                        {tool.name}
                      </span>
                    </button>

                    {/* DETALLE ESCRITORIO */}

                    <div
                      className={`skills__desktop-detail ${
                        isSelected
                          ? 'skills__desktop-detail--open'
                          : ''
                      }`}
                      id={`desktop-tool-${tool.id}`}
                      aria-hidden={!isSelected}
                    >
                      {isSelected && (
                        <ToolDetail
                          name={tool.name}
                          description={tool.description}
                          details={tool.details}
                          Icon={Icon}
                          language={language}
                        />
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* DETALLE MÓVIL */}

            <div
              className={`skills__mobile-detail ${
                selectedToolData &&
                SelectedToolIcon
                  ? 'skills__mobile-detail--open'
                  : ''
              }`}
              id="mobile-tool-detail"
              aria-hidden={!selectedToolData}
            >
              <div className="skills__mobile-detail-inner">
                {selectedToolData &&
                  SelectedToolIcon && (
                    <ToolDetail
                      name={selectedToolData.name}
                      description={
                        selectedToolData.description
                      }
                      details={
                        selectedToolData.details
                      }
                      Icon={SelectedToolIcon}
                      language={language}
                    />
                  )}
              </div>
            </div>
          </div>
        </div>

        {/* HERRAMIENTAS DE AUTOMATIZACIÓN */}

        <div className="skills__section">
          <div className="skills__learning-grid">
            {learningSkills.map((skill) => {
              const Icon = learningIcons[skill.id]

              if (!Icon) {
                return null
              }

              return (
                <article
                  className="skills__learning-item"
                  key={skill.id}
                >
                  <Icon
                    className="skills__learning-icon"
                    aria-hidden="true"
                  />

                  <span className="skills__learning-name">
                    {skill.name}
                  </span>
                </article>
              )
            })}
          </div>
        </div>

        {/* METODOLOGÍAS Y TIPOS DE PRUEBA */}

        <div className="skills__knowledge-grid">
          {/* METODOLOGÍAS */}

          <div className="skills__knowledge">
            <div className="skills__knowledge-heading">
              <h3>
                {t('skills.methodologiesTitle')}
              </h3>
            </div>

            <div className="skills__chips">
              {methodologyKeys.map((key) => (
                <span
                  className="skills__chip"
                  key={key}
                >
                  {t(`skills.methodologies.${key}`)}
                </span>
              ))}
            </div>
          </div>

          {/* TIPOS DE PRUEBA */}

          <div className="skills__knowledge">
            <div className="skills__knowledge-heading">
              <h3>
                {t('skills.testingTypesTitle')}
              </h3>
            </div>

            <div className="skills__chips">
              {testingTypeKeys.map((key) => (
                <span
                  className="skills__chip"
                  key={key}
                >
                  {t(`skills.testingTypes.${key}`)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
