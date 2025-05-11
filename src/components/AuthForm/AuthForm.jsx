const AuthForm = ({ title, fields, onSubmit, buttonText, extraElement }) => {
  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">{title}</legend>
            {fields.map(({ label, type, name, onChange }, index) => (
              <div className={index === 0 ? "mt3" : "mv3"} key={name}>
                <label className="db fw6 lh-copy f6" htmlFor={name}>{label}</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type={type}
                  name={name}
                  id={name}
                  onChange={onChange}
                />
              </div>
            ))}
          </fieldset>
          <div>
            <input 
              onClick={onSubmit}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
              type="submit" 
              value={buttonText} 
            />
          </div>
          {extraElement && (
            <div className="lh-copy mt3">{extraElement}</div>
          )}
        </div>
      </main>
    </article>
  );
};

export default AuthForm;
