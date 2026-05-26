import styles from './Feedbacks.module.css'

const feedbacks = [
  {
    id: 1,
    user: 'Murilo',
    message: 'Interface muito limpa e agradável.'
  },
  {
    id: 2,
    user: 'Carlos',
    message: 'Projeto com bastante potencial.'
  },
  {
    id: 3,
    user: 'Ana',
    message: 'Gostei bastante da organização visual.'
  }
]

export function Feedbacks() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Feedbacks</h1>

        <p className={styles.subtitle}>
          Compartilhe sua opinião sobre a plataforma.
        </p>

        <div className={styles.form}>
          <textarea
            placeholder="Escreva seu feedback..."
          />

          <button>
            Enviar feedback
          </button>
        </div>

        <div className={styles.feedbackList}>
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className={styles.card}>
              <span>{feedback.user}</span>

              <p>{feedback.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}