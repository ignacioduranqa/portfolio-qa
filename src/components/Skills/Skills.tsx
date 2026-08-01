import { useState } from 'react'

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
  methodologies,
  testingTypes,
} from '../../data/skills'

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

interface ToolDetailProps {
  name: string
  description: string
  details: string[]
  Icon: IconType
}

function ToolDetail({
  name,
  description,
  details,
  Icon,
}: ToolDetailProps) {
  return (
    <article className="skills__tool-detail">
      <div className="skills__tool-detail-heading">
        <Icon
          className="skills__tool-detail-icon"
          aria-hidden="true"
        />

        <div>
          <span className="skills__tool-detail-label">
            Uso profesional
          </span>

          <h4>{name}</h4>
        </div>
      </div>

      <p className="skills__tool-detail-description">
        {description}
      </p>

      <ul className="skills__tool-detail-list">
        {details.map((detail) => (
          <li key={detail}>
            <FaCheck aria-hidden="true" />

            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

function Skills() {
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
      <div className="skills__heading">
        <span className="skills__eyebrow">
          Mi caja de herramientas
        </span>

        <h2 className="skills__title">
          Herramientas y conocimientos
        </h2>

        <p className="skills__description">
          Herramientas, metodologías y tipos de pruebas que he utilizado
          durante mi experiencia en calidad de software.
        </p>

        <div
          className="skills__line"
          aria-hidden="true"
        />
      </div>

      <div className="skills__container">
        <div className="skills__section">
          <div className="skills__section-heading">
            <h3>Herramientas</h3>
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
                        />
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

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
                    />
                  )}
              </div>
            </div>
          </div>
        </div>

        <div className="skills__section">
          <div className="skills__section-heading">
            <h3>Actualmente aprendiendo</h3>
          </div>

          <div className="skills__learning-grid">
            {learningSkills.map((skill) => {
              const Icon =
                learningIcons[skill.id]

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

                  <span className="skills__learning-status">
                    {skill.status}
                  </span>
                </article>
              )
            })}
          </div>
        </div>

        <div className="skills__knowledge-grid">
          <div className="skills__knowledge">
            <div className="skills__knowledge-heading">
              <h3>Metodologías y análisis</h3>
            </div>

            <div className="skills__chips">
              {methodologies.map(
                (methodology) => (
                  <span
                    className="skills__chip"
                    key={methodology}
                  >
                    {methodology}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="skills__knowledge">
            <div className="skills__knowledge-heading">
              <h3>Tipos de prueba</h3>
            </div>

            <div className="skills__chips">
              {testingTypes.map(
                (testingType) => (
                  <span
                    className="skills__chip"
                    key={testingType}
                  >
                    {testingType}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills