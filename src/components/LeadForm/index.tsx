import { Checkbox, Form, Input, InputNumber } from 'antd';
import styles from "./styles.module.scss";
import Button from "@/components/Button";
import { useState } from 'react';

interface ItemTypes {
    label: string;
    name: string;
    message: string;
    placeholder: string;
}

const items = [
    {
        label: "Diga, qual seu nome?",
        name: "name",
        message: 'Por favor digite seu nome',
        placeholder: "Insira seu nome"
    },
    {
        label: "Seu email de trabalho",
        name: "email",
        message: 'Por favor insira seu em-email',
        placeholder: "Insira seu em-email"
    },
    {
        label: "Seu telefone",
        name: "phone",
        message: 'Por favor digite seu telefone!',
        placeholder: "Insira seu número de telefone com DDD"
    },
    {
        label: "Crie uma senha",
        name: "password",
        message: 'Por favor crie uma senha!',
        placeholder: "Utilize maiúsculas, minúsculas e caracteres especiais"
    },
    {
        label:"Confirme sua senha",
        name:"passwordConf",
        message: 'Por favor confirme sua senha!',
        placeholder: "Confirmação de senha"
    }
];

const LeadForm = () => {
    
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
  
  return (
    <div className={styles.container}>
        <div className={styles.formHeader}>
            <div className={styles.title}>
                Comece seus 10 dias de teste grátis do RD Station Marketing!
            </div>
            <div className={styles.subtitle}>
                Não precisa cadastrar cartão de crédito. 😉
            </div>
        </div>
        
        <Form
            layout='vertical'
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className={styles.form}
        >
            {
                items.map((item: ItemTypes, index: number) => (
                    <Form.Item
                        label={item.label}
                        name={item.name}
                        rules={[{ required: true, message: item.message }]}
                        className={styles.item}
                        key={index}
                    >
                        <Input className={styles.input} placeholder={item.placeholder}/>
                    </Form.Item>
                ))
            }
            <Form.Item 
                label="Qual o site da sua empresa?"
                name="remember"
                className={styles.item}
            >
                <Checkbox
                    checked={componentDisabled}
                    onChange={(e) => setComponentDisabled(e.target.checked)}
                >
                    Meu site é
                </Checkbox>
            </Form.Item>

            <Form.Item
                name="siteURL"
                className={styles.item}
            >
                <Input className={styles.input} disabled={!componentDisabled} placeholder='Insira o endereço do seu site'/>
            </Form.Item>

            <Form.Item
                className={styles.item}
                name="noSite"
            >
                <Checkbox
                    checked={!componentDisabled}
                    onChange={(e) => setComponentDisabled(!e.target.checked)}
                >
                    Ainda não tenho site
                </Checkbox>
            </Form.Item>

            <div className={styles.buttonContainer}>
                <Button
                    color="highligh"
                    size="medium"
                    // onClick={() => "submit"}
                    onClick={() => {
                        console.log("cliquei");
                    }}
                    >
                    Criar minha conta
                </Button>
            </div>
        </Form>
    </div>
  );
};

export default LeadForm;
