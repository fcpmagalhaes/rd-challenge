import { Checkbox, Form, Input, Select } from "antd";
import styles from "./styles.module.scss";
import Button from "@/components/Button";
import { useState } from "react";
import { fetchLocalRegister, RegisterData } from "@/services/register";
import Link from "next/link";

const { Option } = Select;
const positions = [
  "Sócio(a) / CEO / Proprietário(a)",
  "Diretor(a) de Vendas",
  "Diretor(a) de Marketing",
  "Diretor(a) Outras Áreas",
  "Gerente de Marketing",
  "Gerente de Vendas",
  "Coordenador(a)/Supervisor(a) de Marketing",
  "Coordenador(a)/Supervisor(a) de Vendas",
  "Analista/Assistente de Marketing",
  "Analista/Assistente de Vendas",
  "Vendedor(a) / Executivo(a) de Contas",
  "Estudante",
  "Outros Cargos",
];
const useTerms = ' https://legal.rdstation.com/pt-BR/rdstation-services-agreement/';
const privacyPol = ' https://legal.rdstation.com/pt/privacy-policy/';


const LeadForm = () => {
  const [form] = Form.useForm();

  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
  const [postSucess, setPostSucess] = useState<boolean>(false);


  const onFinish = async (values: RegisterData) => {
    try {
      const { data } = await fetchLocalRegister(values);
      setPostSucess(true);
      alert(data.message);
    } catch (error) {
      console.log("Register error", error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const validatePassword = (_: any, value: string) => {
    if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,10}$/.test(value)) {
      return Promise.reject(
        "A senha precisa ter de 6 a 10 caracteres, uma letra maiúscula e uma minúscula"
      );
    }
    return Promise.resolve();
  };

  const handleCheckboxChange = (e: any) => {
    setComponentDisabled(e);
    if (componentDisabled) {
      form.setFieldsValue({ siteURL: undefined });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formHeader}>
        {postSucess ? (
          <div className={styles.title}>Obrigado! Entraremos em contato.</div>
        ) : (
          <>
            <div className={styles.title}>
              Comece seus 10 dias de teste grátis do RD Station Marketing!
            </div>
            <div className={styles.subtitle}>
              Não precisa cadastrar cartão de crédito. 😉
            </div>
          </>
        )}
      </div>

      {!postSucess && (
        <Form
          layout="vertical"
          name="basic"
          initialValues={{ site: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className={styles.form}
          form={form}
        >
          <Form.Item
            label="Diga, qual seu nome?"
            name="name"
            rules={[{ required: true, message: "Por favor digite seu nome" }]}
            className={styles.item}
          >
            <Input className={styles.input} placeholder="Insira seu nome" />
          </Form.Item>
          <Form.Item
            label="Seu email de trabalho"
            name="email"
            rules={[
              {
                required: true,
                message: "Por favor insira seu em-email",
                type: "email",
              },
            ]}
            className={styles.item}
          >
            <Input className={styles.input} placeholder="Insira seu em-email" />
          </Form.Item>
          <Form.Item
            label="Seu telefone"
            name="phone"
            rules={[
              { required: true, message: "Por favor digite seu telefone!" },
            ]}
            className={styles.item}
          >
            <Input
              className={styles.input}
              placeholder="Insira seu número de telefone com DDD"
            />
          </Form.Item>
          <Form.Item
            label="Seu Cargo de ocupação"
            name="ocupation"
            rules={[{ required: true, message: "Por favor digite seu nome" }]}
            className={styles.item}
          >
            <Select placeholder="Selecione seu Cargo" className={styles.input}>
              {positions.map((position: string, index: number) => (
                <Option value={index} key={index}>
                  {position}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Crie uma senha"
            name="password"
            rules={[
              { required: true, message: "Por favor, crie uma senha!" },
              { validator: validatePassword },
            ]}
            className={styles.item}
          >
            <Input.Password
              className={styles.input}
              placeholder="Utilize maiúsculas, minúsculas e números"
            />
          </Form.Item>
          <Form.Item
            label="Confirme sua senha"
            name="passwordConf"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Por favor, confirme uma senha!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("As duas senhas digitadas são diferentes!")
                  );
                },
              }),
            ]}
            className={styles.item}
          >
            <Input.Password
              className={styles.input}
              placeholder="Utilize maiúsculas, minúsculas e números"
            />
          </Form.Item>
          <Form.Item
            label="Qual o site da sua empresa?"
            name="site"
            className={styles.item}
          >
            <Checkbox
              checked={componentDisabled}
              onChange={(e) => handleCheckboxChange(e.target.checked)}
            >
              Meu site é
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="siteURL"
            className={styles.item}
            rules={[{ type: "url", message: "Digite uma URL válida!" }]}
          >
            <Input
              className={styles.input}
              disabled={!componentDisabled}
              placeholder="Insira o endereço do seu site"
            />
          </Form.Item>
          <Form.Item className={styles.item} name="noSite">
            <Checkbox
              checked={!componentDisabled}
              onChange={(e) => handleCheckboxChange(!e.target.checked)}
            >
              Ainda não tenho site
            </Checkbox>
          </Form.Item>

          <ul className={styles.terms}>
            <li>
                Ao criar minha conta estou de acordo com os <Link href={useTerms} target="_blank" className={styles.link}>termos de uso</Link> do software e <Link href={privacyPol} target="_blank" className={styles.link}>política de privacidade</Link>.
            </li>
            <li>
                Ao preencher o formulário, concordo em receber comunicações de acordo com meus interesses.
            </li>
            <li>
                *Você pode alterar suas permissões de comunicação a qualquer tempo.
            </li>
          </ul>

          <div className={styles.buttonContainer}>
            <Button color="highligh" size="medium">
              Criar minha conta
            </Button>
          </div>
        </Form>
      )}
    </div>
  );
};

export default LeadForm;
